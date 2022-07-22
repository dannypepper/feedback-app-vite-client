<script>
import { FeedbackStore } from "../../stores";

$: counter = $FeedbackStore.length;
$: averageRating = Math.round($FeedbackStore.reduce(
  (a, feedback) => a + feedback.rating, 0) / $FeedbackStore.length * 100) / 100 || 0;
</script>

<div class="feedback-stats">
  <h3>{counter} Reviews</h3>
  <h3>Ratings Average: {averageRating}</h3>
</div>

<style>
  .feedback-stats {
    margin: 60px 16px 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>