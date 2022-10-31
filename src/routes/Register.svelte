<script>
  import { jwt } from "../userStores.js"
  import { navigate } from "svelte-routing"
  import AccountForm from "../components/AccountForm.svelte"

  let newUser = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    location: {
      city: "",
      state: "",
      country: "",
    },
  }

  const handleSubmit = async () => {
    jwt.createUser(newUser)
      .then((value) => {
      if (value) {
        navigate("/calendar")
      }})
  }
  
</script>

<style>

</style>

<h1>Sign up to join the Hee-Haw!</h1>
<AccountForm isNewUser={true} handleSubmit={handleSubmit} bind:value={newUser} buttonLabel="Sign up"/>
