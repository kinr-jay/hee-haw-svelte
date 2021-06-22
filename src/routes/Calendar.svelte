<script>
  import { onMount } from "svelte"
  import TripCard from "../components/TripCard.svelte"

  import { jwt } from "../userStores.js"
  import { trips } from "../tripStores.js"
  import { navigate } from "svelte-routing"

  onMount(async () => {
    trips.load(JSON.parse($jwt))
  })

</script>

<style>

</style>

{#if $trips}
  {#if $trips === 401}
    {navigate("/")}
  {:else if $trips.length > 0}
    <h2>Upcoming Trips</h2>
    <div class="trips-list">
      {#each $trips as trip}
        <TripCard trip={trip}/>
      {/each}
    </div>
  {/if}
{:else}
  <h2>loading...</h2>
{/if}