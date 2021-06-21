<script>
  import { onMount } from "svelte"
  import { user } from "../userStores.js"
  import { jwt } from "../userStores.js"

  onMount(() => {
    user.getUser(JSON.parse($jwt))
  })

</script>

<style>

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
    <h4>Password</h4>
    <p>Lol did you think I was just going to list it here?</p>
  </div>
  <button>Edit Account Information</button>
{:else}
  <h2>loading...</h2>
{/if}