<script>
  import {selectedTrip} from "../tripStores.js"

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

<div class="trip-details">
  <h2>{$selectedTrip.title}</h2>
  <img src={$selectedTrip.image} alt="visual stoke">
  <h4>Where?</h4>
  <p>{$selectedTrip.area}</p>
  <h4>When?</h4>
  <p>{$selectedTrip.startDate} to {$selectedTrip.endDate}</p>
  <h4>What are we doing?</h4>
  <p>{$selectedTrip.description}</p>
  <h4>What's the estimated mileage?</h4>
  <p>{$selectedTrip.distance} miles</p>
  <h4>Elevation?</h4>
  <p>{$selectedTrip.elevation} feet</p>
  <h4>Where will we meet?</h4>
  <p>{$selectedTrip.muster}</p>
  <h4>What regulations do we need to keep in mind?</h4>
  <p>{$selectedTrip.regs}</p>
  <!-- <h4>Do I need any special skills?</h4>
  <p>{$selectedTrip.skills}</p> -->
  <h4>What about gear?</h4>
  <ul>
    {#each $selectedTrip.gearList as gear}
      <li>{gear}</li>
    {/each}
  </ul>
  <h4>How big is the team?</h4>
  <p>Up to {$selectedTrip.groupSize} heartbeats</p>
  <h4>Who else is signed up?</h4>
  <ul>
    {#each $selectedTrip.team as member}
      <li>{member.firstName + " " + member.lastName}</li>
    {/each}
  </ul>
</div>