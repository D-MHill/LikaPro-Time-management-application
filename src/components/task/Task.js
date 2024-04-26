import React, { useState } from "react";
import "../task/Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashAlt,
	faPlayCircle,
	faCheckCircle,
	// faPenToSquare,
} from "@fortawesome/free-solid-svg-icons"; //icones do FontAwesome

function Task({ task, handleDeleteTask }) {
	const [taskStatus, setTaskStatus] = useState("Not Started");

	const getStatusIcon = () => {
		switch (taskStatus) {
			case "Not Started":
				return null;
			case "In Progress":
				return <FontAwesomeIcon icon={faPlayCircle} className="status-icon" />;
			case "Done":
				return <FontAwesomeIcon icon={faCheckCircle} className="status-icon" />;
			default:
				return null;
		}
	};

	const getPriorityColor = () => {
		switch (task.priority) {
			case "Low":
				return "#66CDAA";
			case "Medium":
				return "#F0E68C";
			case "High":
				return "#D09385";
			default:
				return "#D09385";
		}
	};

	const handleStatusClick = (status) => {
		setTaskStatus(status);
	};

	return (
		<div className="task-box">
			<div
				className="task-container"
				style={{ backgroundColor: getPriorityColor() }}>
				<div className="status-icon-container">{getStatusIcon()}</div>{" "}
				<h2>{task.title}</h2>
				<p>Status: {taskStatus}</p>
				<p>{task.description}</p>
				<p>
					Start Date: {task.startDate} &nbsp;&nbsp;&nbsp; Due Date:
					{task.dueDate}
				</p>
				<p>Who will do it: {task.allocate}</p>
				<p>Priority: {task.priority}</p>
				<button
					type="button"
					onClick={() => handleStatusClick("In Progress")}
					id="status1">
					Start
				</button>
				<button
					type="button"
					onClick={() => handleStatusClick("Done")}
					id="status2">
					Finish
				</button>
				{/* <button type="button" id="edit">
					<FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
				</button>  */}
				<button
					type="button"
					onClick={() => handleDeleteTask(task.id)}
					id="delete">
					<FontAwesomeIcon icon={faTrashAlt} />
				</button>
			</div>
		</div>
	);
}

export default Task;
