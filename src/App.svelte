<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Audiowide" rel="stylesheet">
  <style>
    @import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
  </style>
</svelte:head>

<script>
import "@fontsource/el-messiri";
import FeedbackForm from "./components/feedback/FeedbackForm.svelte";
import FeedbackList from "./components/feedback/FeedbackList.svelte";
import FeedbackStats from "./components/feedback/FeedbackStats.svelte";

</script>

<main>
  <h1>Hello</h1>
  <a href="/">
    <h2>Hello</h2>
  </a>
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList />
</main>
