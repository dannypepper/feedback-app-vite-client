<script>
import { LoremIpsum } from "lorem-ipsum";

import FeedbackList from "./components/FeedbackList.svelte";

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

$: count = feedbacks.length;

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
  <h3>{count}</h3>
  <FeedbackList {feedbacks} on:delete-feedback={deleteFeedback}/>
</main>
