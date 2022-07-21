<script>
import { fade, scale } from 'svelte/transition';
import FeedbackItem from "./FeedbackItem.svelte";
export let feedbacks = [];

</script>

{#each feedbacks as feedback (feedback.id)}
  <div transition:scale>
    <FeedbackItem {feedback} on:delete-feedback />
  </div>
{/each}