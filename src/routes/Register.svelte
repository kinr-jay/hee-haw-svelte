<script>
  import { jwt } from "../userStores.js"
  import { navigate } from "svelte-routing"

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
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label {
    width: 260px;
    margin: 5px 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
</style>

<h1>Sign up to join the Hee-Haw!</h1>
<form on:submit|preventDefault={handleSubmit}>
  <label for="firstName">
    first name:
    <input type="text" id="firstName" placeholder="" bind:value={newUser.firstName}>
  </label>
  <label for="lastName">
    last name:
    <input type="text" id="lastName" placeholder="" bind:value={newUser.lastName}>
  </label>
  <label for="phone">
    phone:
    <input type="text" id="phone" placeholder="" bind:value={newUser.phone}>
  </label>
  <label for="email">
    email:
    <input type="email" id="email" placeholder="" bind:value={newUser.email}>
  </label>
  <label for="password">
    password:
    <input type="password" id="password" placeholder="" bind:value={newUser.password}>
  </label>
  <label for="city">
    city:
    <input type="text" id="city" placeholder="" bind:value={newUser.city}>
  </label>
  <label for="state">
    state:
    <input type="text" id="state" placeholder="" bind:value={newUser.state}>
  </label>
  <label for="country">
    country:
    <input type="text" id="country" placeholder="" bind:value={newUser.country}>
  </label>
  <button type="submit" class="submit-button">Sign up</button>
</form>