<script>
  import {Route} from "svelte-routing"
  import AccessDenied from "../routes/AccessDenied.svelte"
  import {jwt} from "../userStores.js"

  export let path
  export let component

  $: isLoggedIn = $jwt
</script>

<style>

</style>

{#if isLoggedIn}
  <Route path={path} component={component}/>
{:else}
  <Route path={path} component={AccessDenied}/>
{/if}
