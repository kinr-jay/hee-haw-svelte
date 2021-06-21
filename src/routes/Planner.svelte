<script>
  import TextInput from "../components/inputs/TextInput.svelte"
  import TextAreaInput from "../components/inputs/TextAreaInput.svelte"
  import DateInput from "../components/inputs/DateInput.svelte"
  import ListInput from "../components/inputs/ListInput.svelte"
  import NumberInput from "../components/inputs/NumberInput.svelte"

  import "./planner.css"

  import { selectedTrip } from "../tripStores.js"


</script>

<style>

</style>

<h2>Trip Planner</h2>
<form action="">
  <TextInput label="Title" name="title" data={$selectedTrip.title}/>
  <TextInput label="Area" name="area" data={$selectedTrip.area}/>
  <DateInput label="Start Date" name="startDate" data={$selectedTrip.startDate}/>
  <DateInput label="End Date" name="endDate" data={$selectedTrip.endDate}/>
  <TextAreaInput label="Description" name="description" data={$selectedTrip.description}/>
  <!-- <ListInput label="Required Skills" name="skills" data={$selectedTrip.skills}/> -->
  <NumberInput label="Distance" name="distance" data={$selectedTrip.distance}/>
  <NumberInput label="Elevation" name="elevation" data={$selectedTrip.elevation}/>
  <NumberInput label="Max Group Size" name="groupSize" data={$selectedTrip.groupSize}/>
  <TextAreaInput label="Muster Point" name="muster" data={$selectedTrip.muster}/>
  <TextAreaInput label="Regulations" name="regs" data={$selectedTrip.regs}/>
  <ListInput label="Gear List" name="gearList" data={Object.values($selectedTrip.gearList)}/>
  <button type="submit" class="submit-button">Put it on the books!</button>
</form>