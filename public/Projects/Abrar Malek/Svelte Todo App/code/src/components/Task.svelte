<script>
    export let isChecked = false;
    export let content = "";
    export let id;

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function toggle() {
        isChecked = !isChecked;
        dispatch("toggle", { id: id });
    }
</script>

<div class="task" on:click={toggle} class:checked={isChecked}>
    <input
        type="checkbox"
        name={id}
        bind:checked={isChecked}
        aria-label="done"
    />
    <label for={id} class="content"
        ><svg
            class="check-mark-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
        >
            <polyline
                class="check-mark-svg-path"
                points="25.5,53.5 39.5,67.5 72.5,34.5 "
            />
        </svg>
        <span>{content}</span>
    </label>
</div>

<style>
    .task {
        cursor: pointer;
        width: 100%;
        padding: 10px;
        border: 1px solid #dee2e6;
        border-radius: 0.25rem;
        display: flex;
        align-items: center;
        position: relative;
    }
    .checked {
        opacity: 0.6;
    }
    .content {
        cursor: pointer;
        pointer-events: none;
        word-break: break-all;
        display: inline-block;
        margin-left: 4px;
    }
    input[type="checkbox"] {
        pointer-events: none;
        cursor: pointer;
        margin-right: 8px;
        box-sizing: border-box;
        min-width: 18px;
        min-height: 18px;
        opacity: 0;
    }
    input[type="checkbox"]:checked + .content {
        text-decoration: line-through;
        color: grey;
    }
    [type="checkbox"] + label::before {
        content: "";
        min-width: 18px;
        min-height: 18px;
        position: absolute;
        left: 5px;
        border-radius: 3px;
        background-color: #eee;
        transition: all 0.4s;
    }

    /* this is the svg for the checkmark */
    [type="checkbox"] + label svg {
        position: absolute;
        width: 28px;
        left: 1px;
        top: 4px;
    }

    /* this is the polyline for the checkmark svg */
    [type="checkbox"] + label svg polyline {
        stroke: white;
        stroke-width: 8;
        fill: none;
        stroke-dasharray: 70;
        stroke-dashoffset: 70;
        transition: stroke-dashoffset 0.2s;
    }

    /* change the color of custom checkbox when the original checkbox is in checked state */
    [type="checkbox"]:checked + label::before {
        /* background-color: #63d45b; */
        background-color: blue;
    }

    /* setting stroke-dashoffset to 0 will reveal the hidden checkmark */
    [type="checkbox"]:checked + label svg polyline {
        stroke-dashoffset: 0;
    }
</style>
