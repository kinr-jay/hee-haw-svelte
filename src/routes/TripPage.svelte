<script>
  import { onMount } from "svelte"
  import { navigate } from "svelte-routing"
  import { selectedTrip, trip } from "../tripStores.js"
  import { jwt } from "../userStores.js"

  export let tripId

  const handleEditTrip = () => {
    $selectedTrip = $trip
    navigate("/planner")
  }

  const handleJoinTeam = async () => {
    await trip.joinTeam(JSON.parse($jwt), $trip.tripId)
    trip.load(JSON.parse($jwt), tripId)
  }

  const handleLeaveTeam = async () => {
    await trip.leaveTeam(JSON.parse($jwt), $trip.tripId)
    trip.load(JSON.parse($jwt), tripId)
  }

  onMount(() => {
    trip.load(JSON.parse($jwt), tripId)
  })

</script>

<style>
  @media only screen and (min-width: 475px) {
    p {
      width: 550px;
    }
  }
  img {
    height: 400px;
    width: auto;
  }
  h4, p, ul {
    text-align: left;
  }
  h4 {
    margin-bottom: 5px;
  }
  p {
    margin-top: 0;
  }
  ul {
    padding-left: 0;
  }
  li {
    list-style: none;
  }

</style>

{#if $trip}
  <div class="trip-details">
    <h2>{$trip.title}</h2>
    <img src={$trip.image} alt="visual stoke">
    <h4>Where?</h4>
    <p>{$trip.area}</p>
    <h4>When?</h4>
    <p>{$trip.startDate} to {$trip.endDate}</p>
    <h4>What are we doing?</h4>
    <p>{$trip.description}</p>
    <h4>What's the estimated mileage?</h4>
    <p>{$trip.distance} miles</p>
    <h4>Elevation?</h4>
    <p>{$trip.elevation} feet</p>
    <h4>Where will we meet?</h4>
    <p>{$trip.muster}</p>
    <h4>What regulations do we need to keep in mind?</h4>
    <p>{$trip.regs}</p>
    <!-- <h4>Do I need any special skills?</h4>
    <p>{$trip.skills}</p> -->
    <h4>What about gear?</h4>
    <ul>
      {#each $trip.gearList as gear}
        <li>{gear}</li>
      {/each}
    </ul>
    <h4>How big is the team?</h4>
    <p>Up to {$trip.groupSize} heartbeats</p>
    <h4>Who else is signed up?</h4>
    <ul>
      {#each $trip.team as member}
        <li>{member.firstName + " " + member.lastName}</li>
      {/each}
    </ul>
    <button type="button" on:click={handleJoinTeam}>Join Trip</button>
    <button type="button" on:click={handleLeaveTeam}>Bail on Trip</button>
    <button type="button" on:click={handleEditTrip}>Edit Trip</button>
  </div>
{:else}
  <h2>loading...</h2>
{/if}