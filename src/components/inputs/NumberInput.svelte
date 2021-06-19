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
    text-align: right;
    width: 60px;
  }
</style>

<div class="input-container">
  <label for={name}>{label}:</label>
  <input type="number" id={name} name={name} bind:value={data}>
</div>