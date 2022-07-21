<script>
  export let style = 'primary';
  export let type = 'button';
  export let disabled = false;
</script>

<button  class={style} {type} {disabled}>
  <slot></slot>
</button>

<style>
button {
  color: #FFD0AA;
  border: 0;
  border-radius: 13px;
  background-color: #43AD53;
  width: 100px;
  height: auto;
  cursor: pointer;
  margin-left: 10px;
}

.primary {
  background-color: #43AD53;
}

.secondary {
  background: #ff6a95;
}

button:hover {
  transform: scale(0.98);
  opacity: 0.9;
}

button:disabled{
  background-color: #cccccc;
  color: #333;
  cursor:auto;
}

button:disabled:hover{
  transform:scale(1);
  opacity: 1;
}
</style>