<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Audiowide" rel="stylesheet">
  <style>
    @import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
  </style>
</svelte:head>

<script>
import "@fontsource/el-messiri";
import { LoremIpsum } from "lorem-ipsum";

import FeedbackForm from "./components/feedback/FeedbackForm.svelte";
import FeedbackList from "./components/feedback/FeedbackList.svelte";
import FeedbackStats from "./components/feedback/FeedbackStats.svelte";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  }
});

const createFeedbackList = (length) => {
  let feedbacks = [];
  for (let i = 1; i <= length; i++) {
    let rating = Math.floor(Math.random() * 10) + 1;
    const description = lorem.generateSentences(3);
    feedbacks.push({
      id: i,
      rating: rating,
      description: description,
    }
  )}
  return feedbacks;
};

let feedbacks = createFeedbackList(10);

$: counter = feedbacks.length;
$: averageRating = Math.round(feedbacks.reduce(
  (a, feedback) => a + feedback.rating, 0) / feedbacks.length * 10) / 10;

const addFeedback = (e) => {
  const newFeedback = e.detail;
  feedbacks = [...feedbacks, newFeedback]
};

const deleteFeedback = (e) => {
  const feedbackId = e.detail;
  feedbacks = feedbacks.filter((feedback) => feedback.id !== feedbackId);
};
</script>

<main>
  <h1>Hello</h1>
  <a href="/">
    <h2>Hello</h2>
  </a>
  <FeedbackForm on:create-feedback={addFeedback}/>
  {#if counter}
    <FeedbackStats {counter} {averageRating} />
  {/if}

  <FeedbackList {feedbacks} on:delete-feedback={deleteFeedback} />
</main>
