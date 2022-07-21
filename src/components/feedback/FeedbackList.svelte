<script>
import { fade, scale } from 'svelte/transition';
import FeedbackItem from "./FeedbackItem.svelte";
export let feedbacks = [];

</script>

{#each feedbacks as feedback (feedback.id)}
  <div in:fade="{{ duration: 420 }}" out:scale="{{ duration: 420 }}">
    <FeedbackItem {feedback} on:delete-feedback />
  </div>
{/each}