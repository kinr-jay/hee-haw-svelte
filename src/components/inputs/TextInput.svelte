<script>
  export let label
  export let name
  export let data
</script>

<style>
  div {
    display: flex;
  }
  label {
    text-align: right;
    margin-right: 15px;
  }
  input {
    flex-grow: 1;
    border: none;
    border-bottom: 1px solid black;
  }
</style>

<div class="input-container">
  <label for={name}>{label}:</label>
  <input type="text" id={name} name={name} bind:value={data}>
</div>