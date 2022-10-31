<script>
import { navigate } from "svelte-routing";
import { jwt } from "../userStores.js"

  let email
  let password
  
  const handleSubmit = async () => {
    jwt.getJWT({
      email: email,
      password: password,
    }).then((value) => {
      if (value) {
        navigate("/calendar")
      } else {
        alert("Invalid login, please try again.")
      }})
  }
</script>

<style>
  form {
    margin-top: 5vh;
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
  p {
    margin-bottom: 0;
  }
</style>

<h1>Yee-haw! Welcome back!</h1>
<form on:submit|preventDefault={handleSubmit}>
  <label for="email">
    email:
    <input type="email" class="email" id="email" placeholder="" bind:value={email}>
  </label>
  <label for="password">
    password:
    <input type="password" class="password" id="password" placeholder="" bind:value={password}>
  </label>
  <button type="submit" class="submit-button">Log In</button>
</form>

<p>Are you new here? Then sign on up.</p>
<button type="button" class="submit-button" on:click={() => navigate("/register")}>Register</button>
