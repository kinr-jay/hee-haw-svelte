<script>
  import { onMount } from "svelte"
  import { user } from "../userStores.js"
  import { jwt } from "../userStores.js"
  import { navigate } from "svelte-routing"

  onMount(async () => {
    user.getUser(JSON.parse($jwt))
  })
  // const testURL = __myapp.env.PRODUCTION
  // console.log("testURL", testURL)
</script>

<style>
  .delete {
    background-color: red;
    margin-top: 30px;
  }
</style>

{#if $user}
  <h2>Account Details</h2>
  <div class="account-details">
    <h4>Member Name</h4>
    <p>{$user.firstName} {$user.lastName}</p>
    <h4>Phone</h4>
    <p>{$user.phone}</p>
    <h4>Email</h4>
    <p>{$user.email}</p>
    <h4>Location</h4>
    <p>{$user.location.city}, {$user.location.state}, {$user.location.country}</p>
  </div>
  <button type="button" on:click={() => navigate("/account-update/")}>Edit Account Information</button>
  <button type="button" on:click={() => user.logout()}>Logout</button>
  <br/>
  <button type="button" on:click={() => navigate("/are-you-sure/")} class="delete">Delete Account</button>
{:else}
  <h2>loading...</h2>
{/if}
