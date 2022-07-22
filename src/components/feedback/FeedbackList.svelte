<script>
// import { onMount, onDestroy } from 'svelte';
import { FeedbackStore } from '../../stores.js'
import { fade, scale } from 'svelte/transition';
import FeedbackItem from "./FeedbackItem.svelte";
// let feedbacks = [];

// const unsubscribe = FeedbackStore.subscribe((data) => feedbacks = data);

// onMount(() => {
//   console.log('mounted');
// });

// onDestroy(() => {
//   unsubscribe();
// });


</script>

{#each $FeedbackStore as feedback (feedback.id)}
  <div in:fade="{{ duration: 420 }}" out:scale="{{ duration: 420 }}">
    <FeedbackItem {feedback} />
  </div>
{/each}