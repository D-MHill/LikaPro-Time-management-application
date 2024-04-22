import React, { useState } from "react";
import "../task-form/TaskForm.css";

function TaskForm({ closeFormProps, addTaskProps }) {
	const [taskTitle, setTaskTitle] = useState("");
	const today = new Date().toISOString().split("T")[0];
	const [taskDescription, setTaskDescription] = useState("");
	const [startDate, setStartDate] = useState(today);
	const [dueDate, setDueDate] = useState("");
	const [priority, setPriority] = useState("High");
	const [allocate, setAllocate] = useState("I will do it");

	const randomNumberGenerator = () => {
		return Math.random() * 1000;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newTask = {
			id: randomNumberGenerator(),
			title: taskTitle,
			description: taskDescription,
			startDate: startDate,
			dueDate: dueDate,
			priority: priority,
			allocate: allocate,
		};

		console.log(newTask);
		addTaskProps(newTask);

		closeFormProps();
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<div className="form">
					<label htmlFor="task-title">Title:</label>
					<br />
					<input
						type="text"
						value={taskTitle}
						onChange={(e) => setTaskTitle(e.target.value)}
						id="task-title"
						required
						placeholder="Add the task title"
					/>
				</div>

				<div className="form">
					<label htmlFor="task-description">
						Task Description
						<span style={{ fontSize: "13px" }}>(optional)</span>:
					</label>
					<br />
					<textarea
						rows="8"
						value={taskDescription}
						onChange={(e) => setTaskDescription(e.target.value)}
						id="task-description"
						placeholder="Describe your task"
					/>
				</div>

				<div className="form">
					<label htmlFor="task-start-date">Start Date:</label>
					<br />
					<input
						type="date"
						value={startDate}
						onChange={(e) => setStartDate(e.target.value)}
						id="task-start-date"
						min={today}
						required
					/>
				</div>

				<div className="form">
					<label htmlFor="task-due-date">Due Date:</label>
					<br />
					<input
						type="date"
						value={dueDate}
						onChange={(e) => setDueDate(e.target.value)}
						id="task-due-date"
						required
					/>
				</div>

				<div className="priority">
					<label htmlFor="priority">Priority Level:</label>
					<br />
					<select
						value={priority}
						onChange={(e) => setPriority(e.target.value)}
						id="priority">
						<option value="High">High</option>
						<option value="Medium">Medium</option>
						<option value="Low">Low</option>
					</select>
				</div>

				<div className="Allocate">
					<label htmlFor="task-allocate">Allocate Task:</label>
					<br />
					<select
						value={allocate}
						onChange={(e) => setAllocate(e.target.value)}
						id="task-allocate">
						<option value="I will do it">I will do it</option>
						<option value="Tim">Tim</option>
						<option value="James Bond">James Bond</option>
					</select>
				</div>
				<div>
					<button type="submit" id="submit">
						Add Task
					</button>
				</div>
			</form>
		</div>
	);
}

export default TaskForm;
