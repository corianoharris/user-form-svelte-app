<script lang="ts">
    import { writable } from "svelte/store";
    import { z } from "zod";
    import "../app.css"; // Ensure Tailwind is applied

    // Store to keep track of the form data
    const formData = writable({ firstName: "", age: "" });
    let submittedData = null;
    let isSubmitting = false;

    // Zod schema for validation
    const userSchema = z.object({
        firstName: z.string().min(1, "First Name is required"),
        age: z.number().min(1, "Age is required").nullable(),
    });

    // Validate user data using the Zod schema
    function validateUserData(data: unknown): boolean {
        try {
            userSchema.parse(data);
            return true;
        } catch (error) {
            console.log(error.errors);
            return false;
        }
    }

    // Handle form submission
    function handleSubmit() {
        isSubmitting = true;
        if (validateUserData($formData)) {
            // Store the submitted data in the `submittedData` variable
            formData.subscribe((data) => {
                submittedData = data;
            });
        } else {
            console.log("Invalid data");
        }
    }

    // Reset form and clear submitted data
    function resetForm() {
        formData.set({ firstName: "", age: "" });
        submittedData = null;
        isSubmitting = false;
    }
</script>

<!-- Form with Tailwind CSS classes -->
<form
    on:submit|preventDefault={handleSubmit}
    class="mt-40 max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
>
    <label for="firstName" class="block font-medium mb-2">First Name</label>
    <input
        type="text"
        id="firstName"
        bind:value={$formData.firstName}
        required
        class="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
    />

    <label for="age" class="block font-medium mb-2">Age</label>
    <input
        type="number"
        id="age"
        bind:value={$formData.age}
        required
        class="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
    />

    <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={isSubmitting}
    >
        Submit
    </button>

    {#if submittedData !== null}
        <button
            type="button"
            class="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 mt-4"
            on:click={resetForm}
        >
            Reset
        </button>
    {/if}
</form>

<!-- Display Submitted Data -->
<div
    class="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg flex flex-col gap-2 justify-center items-center"
>
    {#if submittedData === null}
        <p class="mt-4">No data submitted yet.</p>
    {:else}
        <h2 class="text-xl font-semibold">Submitted Data:</h2>
        {#if submittedData.firstName !== ""}
            <p><strong>First Name:</strong> {submittedData.firstName}</p>
        {/if}
        {#if submittedData.age !== ""}
            <p><strong>Age:</strong> {submittedData.age}</p>
        {/if}
        <p class="mt-4">
            <strong>Form Data:</strong>
            {JSON.stringify($formData)}
        </p>
    {/if}
</div>
