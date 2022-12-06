<script>
  import TextInput from "../components/inputs/TextInput.svelte"
  import TextAreaInput from "../components/inputs/TextAreaInput.svelte"
  import DateInput from "../components/inputs/DateInput.svelte"
  import ListInput from "../components/inputs/ListInput.svelte"
  import NumberInput from "../components/inputs/NumberInput.svelte"

  import { blankTrip } from "../blankTrip.js"
  import { selectedTrip, trip } from "../tripStores.js"

  export let handleSubmit
  export let handleFileSelect
  export let tripExists
  export let buttonLabel
  
  let file = null

  if (!tripExists) {
    $selectedTrip = blankTrip
  } else {
    $selectedTrip = $trip
  }

</script>

<style>

</style>

<form on:submit|preventDefault={handleSubmit}>
  <TextInput label="Title" name="title" bind:value={$selectedTrip.title}/>
  <TextInput label="Area" name="area" bind:value={$selectedTrip.area}/>
  <DateInput label="Start Date" name="startDate" bind:value={$selectedTrip.startDate}/>
  <DateInput label="End Date" name="endDate" bind:value={$selectedTrip.endDate}/>
  <input type="file" name="image" id="image" accept=".png, .jpg, .jpeg" on:change={handleFileSelect}>
  <TextAreaInput label="Description" name="description" bind:value={$selectedTrip.description}/>
  <!-- <ListInput label="Required Skills" name="skills" bind:value={$selectedTrip.skills}/> -->
  <NumberInput label="Distance" name="distance" bind:value={$selectedTrip.distance}/>
  <NumberInput label="Elevation" name="elevation" bind:value={$selectedTrip.elevation}/>
  <NumberInput label="Max Group Size" name="groupSize" bind:value={$selectedTrip.groupSize}/>
  <TextAreaInput label="Muster Point" name="muster" bind:value={$selectedTrip.muster}/>
  <TextAreaInput label="Regulations" name="regs" bind:value={$selectedTrip.regs}/>
  <ListInput label="Gear List" name="gearList" bind:value={$selectedTrip.gearList}/>
  <button type="submit" class="submit-button">{buttonLabel}</button>
</form>