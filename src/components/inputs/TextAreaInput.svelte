<script>
  export let label
  export let name
  export let value
</script>

<style>
  
  div {
    display: flex;
    flex-direction: column;
  }
  label {
    text-align: left;
    margin-bottom: 5px;
  }
  textarea {
    border: none;
    border-left: 1px solid black;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 1.4;
  }
</style>

<div class="input-container">
  <label for={name}>{label}:</label>
  <textarea
    type="textarea"
    id={name}
    name={name}
    bind:value={value}
    rows="5"
    cols="65"
  ></textarea>
</div>