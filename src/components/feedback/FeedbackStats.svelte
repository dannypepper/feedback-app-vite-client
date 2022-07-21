<script>
  export let counter;
  export let averageRating;
</script>

<div class="feedback-stats">
  <h3>{counter} Reviews</h3>
  <h3>Ratings Average: {averageRating}</h3>
</div>

<style>
  .feedback-stats {
    margin: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>