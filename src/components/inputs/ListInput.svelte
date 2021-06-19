<script>
  export let label
  export let name
  export let data

  let newDatum = ""

  const handleClick = () => {
    data.push(newDatum)
  }
</script>

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

<div class="input-container">
  <p>{label}</p>
  <div class="list-container">
    <div>
      <ul class={name}>
        {#each data as datum}
          <li>{datum}</li>
        {/each}
      </ul>
    </div>
    <div class="list-input">
      <label for={name}>Gear:</label>
      <input type="text" id={name} name={name} bind:value={newDatum}>
      <button on:click={handleClick}>Add to Gear List</button>
    </div>
  </div>
</div>