<script>
    import Task from "@/components/Task.svelte";
    import Delete from "@/components/Delete.svelte";
    export let tasks = [];
</script>

<div class="task-list">
    {#each tasks as task (task.id)}
        <div>
            <Task
                content={task.content}
                isChecked={task.isChecked}
                id={task.id}
                on:toggle
            />
            <Delete id={task.id} on:delete />
        </div>
    {/each}
</div>

<style>
    .task-list {
        min-height: 200px;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 20px;
    }
    div {
        display: flex;
        align-content: flex-start;
        height: min-content;
        align-items: center;
    }
</style>
