import Task from "../task/Task";

function TaskList({ arrayOfTasks, handleDeleteTask }) {
	if (arrayOfTasks.length === 0) {
		return <h3>You have no tasks yet</h3>;
	}

	const sortedTasks = arrayOfTasks.sort((a, b) => {
		return new Date(a.startDate) - new Date(b.startDate);
	});

	return (
		<section>
			<h1>My Tasks</h1>
			<div>
				{sortedTasks.map((t) => (
					<Task task={t} key={t.id} handleDeleteTask={handleDeleteTask} />
				))}
			</div>
		</section>
	);
}

export default TaskList;

// [
// 	{   id:1,
// 		title: "Task one",
// 		description: "This is a sample task",
// 		status: "In Progress",
// 		priority: "Medium",
// 	},
// 	{   id:2,
// 		title: "Task two",
// 		description: "This is a sample task",
// 		status: "Not started",
// 		priority: "Low",
// 	},
// ];
