import { useState } from "react";
import TaskForm from "./components/task-form/TaskForm";
import TaskList from "./components/task-list/TaskList";
import Header from "./components/header/Header";
import "./index.css";
import "./App.css";

function App() {
	const [showForm, setShowForm] = useState(false);
	const [taskLists, setTaskLists] = useState([]);

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

	return (
		<div className="frame">
			<div className="container">
				<Header />
				<h3>Manage your time like a pro!</h3>
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
