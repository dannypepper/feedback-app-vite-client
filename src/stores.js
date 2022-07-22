import { writable } from 'svelte/store';
import { LoremIpsum } from "lorem-ipsum";

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

export const FeedbackStore = writable(feedbacks);