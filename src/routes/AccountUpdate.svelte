<script>
  import { onMount } from "svelte"
  import { jwt } from "../userStores.js"
  import { user } from "../userStores.js"
  import { navigate } from "svelte-routing"
  import AccountForm from "../components/AccountForm.svelte"
  
  onMount(async () => {
    user.getUser(JSON.parse($jwt))
  })
  let accountInfo = $user
  console.log('accountInfo', accountInfo)

  const handleSubmit = async () => {
    user.updateUser(JSON.parse($jwt), accountInfo)
      .then((value) => {
      if (value) {
        navigate("/account")
      } else {
        alert("Incorrect password.")
      }})
  }
  
</script>

<style>

</style>

<h1>Update your account information:</h1>
<AccountForm
  isNewUser={false}
  handleSubmit={handleSubmit}
  bind:value={accountInfo}
  buttonLabel="Update Account"
/>
