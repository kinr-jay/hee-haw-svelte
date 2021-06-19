<script>
  import TextInput from "../components/inputs/TextInput.svelte"
  import TextAreaInput from "../components/inputs/TextAreaInput.svelte"
  import DateInput from "../components/inputs/DateInput.svelte"
  import ListInput from "../components/inputs/ListInput.svelte"
  import NumberInput from "../components/inputs/NumberInput.svelte"

  import "./planner.css"

  import { trip } from "../stores.js"


</script>

<style>
  .book-it-button {
    background-color: #ECB390;
    border-radius: 5px;
    padding: 5px 25px;
    font-size: 16px;
    margin: 25px;
  }

</style>

<h2>Trip Planner</h2>
<form action="">
  <TextInput label="Title" name="title" data={$trip.title}/>
  <TextInput label="Area" name="area" data={$trip.area}/>
  <DateInput label="Start Date" name="startDate" data={$trip.startDate}/>
  <DateInput label="End Date" name="endDate" data={$trip.endDate}/>
  <TextAreaInput label="Description" name="description" data={$trip.description}/>
  <!-- <ListInput label="Required Skills" name="skills" data={$trip.skills}/> -->
  <NumberInput label="Distance" name="distance" data={$trip.distance}/>
  <NumberInput label="Elevation" name="elevation" data={$trip.elevation}/>
  <NumberInput label="Max Group Size" name="groupSize" data={$trip.groupSize}/>
  <TextAreaInput label="Muster Point" name="muster" data={$trip.muster}/>
  <TextAreaInput label="Regulations" name="regs" data={$trip.regs}/>
  <ListInput label="Gear List" name="gearList" data={Object.values($trip.gearList)}/>
  <input type="submit" class="book-it-button" value="Put it on the books!">
</form>