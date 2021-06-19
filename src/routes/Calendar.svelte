<script>
  import TripCard from "../components/TripCard.svelte"

  import { trips } from "../stores.js"

</script>

<style>

</style>

<h2>Upcoming Trips</h2>
<div class="trips-list">
  {#each $trips as trip}
    <TripCard trip={trip}/>
  {/each}
</div>