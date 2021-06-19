<script>
  export let label
  export let name
  export let data
</script>

<style>
  div {
    display: flex;
    width: 250px;
    justify-content: space-between;
  }
  label {
    text-align: right;
    margin-right: 15px;
  }
</style>

<div class="input-container">
  <label for={name}>{label}:</label>
  <input type="date" id={name} name={name} bind:value={data}>
</div>