<script>
  import { Link, navigate } from "svelte-routing"
  import { user } from "../userStores.js"
  import { jwt } from "../userStores.js"

  let password

</script>

<style>
  
</style>

<h2>Don't make us cry!</h2>
<p>If you're sure, make your choice final by verifying your password.</p>
<label for="password">
  verify password:
  <input type="password" id="password" placeholder="" bind:value={password}>
</label>
<button type="button" on:click={() => navigate("/account/")}>Cancel</button>
<button type="button" on:click={() => user.deleteUser(JSON.parse($jwt), password)}>Do it.</button>