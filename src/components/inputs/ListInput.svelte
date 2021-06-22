<script>
  export let label
  export let name
  export let value

  let newItem = ""

  const handleClick = () => {
    value = [...value, newItem]
    newItem = ""
  }
</script>

<div class="input-container">
  <p>{label}</p>
  <div class="list-container">
    <div>
      <ul class={name}>
        {#each value as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
    <div class="list-input">
      <label for={name}>Gear:</label>
      <input type="text" id={name} name={name} bind:value={newItem}>
      <button type="button" on:click={handleClick}>Add to Gear List</button>
    </div>
  </div>
</div>

<style>
  .input-container {
    display: flex;
    flex-direction: column;
  }
  p {
    margin-bottom: 0;
  }
  .list-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .list-input {
    display: flex;
    flex-direction: column;
  }
  ul {
    margin-left: 0;
    padding-left: 10px;
    text-align: left;
  }
  label {
    display: none;
  }
  input {
    margin: 5px 0;
  }

</style>
