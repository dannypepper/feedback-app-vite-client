<script>
import { createEventDispatcher } from 'svelte';
import Card from "../card/Card.svelte";

export let feedback = {};

const dispatch = createEventDispatcher();

const deleteFeedback = (feedbackId) => {
  dispatch('delete-feedback', feedbackId);
};
</script>

<Card>
  <div class="num-display">
    {feedback.rating}
  </div>
  <button class="close" on:click="{() => deleteFeedback(feedback.id)}">X</button>
  <p class="description">
    {feedback.description}
  </p>
</Card>

<style>
.num-display {
  position: absolute;
  top: -10px;
  left: -10px;
  width: 32px;
  height: 32px;
  background: #FD997F;
  color: var(--main-background-color);
  border: 1px #eeeeee solid;
  border-radius: 50%;
  padding: 10px;
  text-align: center;
  font-size: 30px;
}
.close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--main-red);
  position: absolute;
  right: 0px;
  top: 0px;
}
</style>