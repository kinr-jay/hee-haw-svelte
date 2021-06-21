<script>
  import { navigate } from "svelte-routing"
  import { selectedTrip } from "../tripStores.js"
  export let trip

  const handleClick = (trip) => {
    selectedTrip.set(trip)
    navigate("/calendar/" + trip.tripId)
  }
</script>

<style>
  .trip-card {
    border: 1px solid black;
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
  }
  h3 {
    margin: 0 0 10px;
  }
  section {
    align-self: center;
    height: 200px;
    width: 250px;
    overflow: hidden;
  }
  .thumbnail {
    height: 100%;
    width: auto;
  }
  .trip-summary {
    width: 400px;
    text-align: left;
    margin: auto 0 auto 30px;
  }
  p {
    margin: 5px 0;
  }
  button {
    margin-top: 20px;
    background-color: #ECB390;
    border-radius: 5px;
    padding: 5px 25px;
    font-size: 16px;
  }
</style>

<div class="trip-card">
  <section class="thumbnail-container">
    <img src={trip.image} alt="probably a mountain" class="thumbnail">
  </section>
  <div class="trip-summary">
    <h3>{trip.title}</h3>
    <p>{trip.area}</p>
    <p>Start Date: {trip.startDate}</p>
    <p>End Date: {trip.endDate}</p>
    <button on:click={() => handleClick(trip)} class="details-button">Check out the details.</button>
  </div>
</div>