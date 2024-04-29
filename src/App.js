import React, { useState, useEffect } from "react";
import TaskForm from "./components/task-form/TaskForm";
import TaskList from "./components/task-list/TaskList";
import Header from "./components/header/Header";
import "./index.css";
import "./App.css";

function App() {
	const [showForm, setShowForm] = useState(false);
	const [taskLists, setTaskLists] = useState([]);
	const [timeDate, setTimeDate] = useState("");

	const handleCloseForm = () => {
		setShowForm(false);
	};

	const handleNewTask = (formData) => {
		setTaskLists([...taskLists, formData]);
	};

	const handleDeleteTask = (id) => {
		const updatedTasks = taskLists.filter((task) => task.id !== id);
		setTaskLists(updatedTasks);
	};

	const handleTimeDate = () => {
		const date = new Date();
		const daysOfWeek = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		const currentDayOfWeek = daysOfWeek[date.getDay()];
		const hours = date.getHours().toString().padStart(2, "0");
		const minutes = date.getMinutes().toString().padStart(2, "0");
		const time = `${hours}:${minutes}`;
		const dateTime = `${currentDayOfWeek}, ${date.toLocaleDateString()} - ${time}`;

		setTimeDate(dateTime);
	};

	useEffect(() => {
		handleTimeDate();

		const intervalId = setInterval(() => {
			handleTimeDate();
		}, 60000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="frame">
			<div className="container">
				<Header />
				<h3 className="hello">Hello! It's {timeDate}</h3>
				<button className="add-task" onClick={() => setShowForm(true)}>
					Add new task
				</button>
				{showForm ? (
					<TaskForm
						closeFormProps={handleCloseForm}
						addTaskProps={handleNewTask}
					/>
				) : (
					<TaskList
						arrayOfTasks={taskLists}
						handleDeleteTask={handleDeleteTask}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
