<script>
import {v4 as uuidv4} from 'uuid';
import { createEventDispatcher } from 'svelte';
import Card from "../card/Card.svelte";
import Button from "../button/Button.svelte";
import RatingSelect from "../select/RatingSelect.svelte";

let description = '';
let descriptionLength = 0;
let rating = 10;
let buttonDisabled = true;
let minDescriptionLength = 10;
let maxDescriptionLength = 144;
let message;
let dispatch = createEventDispatcher();

const handleSelect = e => rating = e.detail;

const handleInput = () => {
  descriptionLength = description.trim().length;
  if (descriptionLength <= minDescriptionLength) {
    buttonDisabled = true;
    message = `Description must be between ${minDescriptionLength} and ${maxDescriptionLength} characters`
  }
  else {
    buttonDisabled = false;
    message = null;
  }
};

const handleSubmit = () => {
  descriptionLength = description.trim().length;
  if (descriptionLength > minDescriptionLength && descriptionLength < maxDescriptionLength) {
    const newFeedback = {
      id: uuidv4(),
      description: description,
      rating: +rating,
    }
    dispatch('create-feedback', newFeedback);    
  }
  description = '';
};
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form action="submit" on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect}/>
    <div class="input-group">
      <input
        type="text"
        bind:value={description}
        placeholder="Tell us something that keeps you coming back"
        class="input"
        on:input={handleInput}
      >
      <Button disabled={buttonDisabled} type="submit">Send</Button>
    </div>
  <div>
    {#if message}
      <div class="message">{message}</div>
    {/if}
    <div class="description-length">{descriptionLength}/144</div>
  </div>
  </form>
</Card>

<style> 
header {
  min-width: 220px;
  max-width: 360px;
  margin: -20px auto 32px auto;
}
header h2 {
  font-size: 22px;
  font-weight: 600;
  text-align: center;
}
.input-group {
  background-color: #526079;
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 8px 10px;
  border-radius: 8px;
  margin: 8px;
}
input::placeholder {
  color: var(--main-text-color);
  font-size: 1rem;
}
input {
  background-color: #526079;
  border: 0px;
  color: var(--main-text-color);
  flex-grow: 2;
  border: none;
}
input:focus {
  outline: none;
}
.message {
  padding-top: 10px;
  text-align: center;
  color: #FF99FF;
}
.description-length {
  display: flex;
  justify-content: end;
  padding-right: 10px;
}
</style>