<script>
  import { onMount } from "svelte"
  import TripForm from "../components/TripForm.svelte"

  import "./planner.css"

  import { selectedTrip, trip } from "../tripStores.js"
  import { jwt } from "../userStores"

  export let tripId

  onMount(() => {
      trip.load(JSON.parse($jwt), tripId)
      $selectedTrip = $trip
  })

  let file = null

  const handleSubmit = async () => {
    if (file) {
      const imageData = new FormData()
      imageData.append("file", file)
      imageData.append("upload_preset", "Hee-Haw-Tiles")
      const options = {
        method: "post",
        body: imageData,
      }
      await fetch("https://api.Cloudinary.com/v1_1/kinr-jay/image/upload", options)
        .then((res) => res.json())
        .then((data) => $selectedTrip.image = data.secure_url)
    }
    if ($selectedTrip.tripId) {
      trip.put(JSON.parse($jwt), $selectedTrip)
    } else {
      trip.post(JSON.parse($jwt), $selectedTrip)
    }
  }

  const handleFileSelect = (event) => {
    file = event.target.files[0]
  }

</script>

<style>

</style>

{#if $trip}
  <h2>Trip Planner</h2>
  <TripForm handleSubmit={handleSubmit} tripExists={true} buttonLabel="Update the books!" handleFileSelect={handleFileSelect}/>
{:else}
  <h2>Loading...</h2>
{/if}
