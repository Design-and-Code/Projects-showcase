<script>
	import AddTask from "@/components/AddTask.svelte";
	import TaskList from "@/components/TaskList.svelte";
	import { v4 as uuidv4 } from "uuid";

	let tasks = [];
	let temp = localStorage.getItem("tasks");
	if (temp) {
		tasks = JSON.parse(temp);
	}
	
	function addTask(e) {

		if(e.detail.text.trim() == "") return;

		tasks = [
			...tasks,
			{ id: uuidv4(), content: e.detail.text, isChecked: false },
		];
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}
	function deleteTask(e) {
		tasks = tasks.filter(({ id }) => {
			return id != e.detail.id;
		});
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}
	function toggleTask(e) {
		tasks = tasks.map((task) => {
			if (task.id != e.detail.id) return task;
			
			let newtask = {id: task.id,content:task.content,isChecked : !task.isChecked};
			return newtask;
		});
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}
</script>

<main>
	<h1>Todo List</h1>
	<TaskList {tasks} on:delete={deleteTask} on:toggle={toggleTask}/>
	<AddTask on:submit={addTask} />
</main>

<style>
	main {
		min-width: 400px;
		max-width: 540px;
		padding: 40px;
		background-color: white;
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 20px;
		border-radius: 0.25rem;
	}
</style>
