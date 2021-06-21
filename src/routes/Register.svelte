<script>
  let firstName = ""
  let lastName = ""
  let email = ""
  let phone = ""
  let password = ""
  let city = ""
  let state = ""
  let country = ""
  
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
<form action="">
  <label for="firstName">
    first name:
    <input type="firstName" class="firstName" id="firstName" placeholder="" bind:value={firstName}>
  </label>
  <label for="lastName">
    last name:
    <input type="lastName" class="lastName" id="lastName" placeholder="" bind:value={lastName}>
  </label>
  <label for="phone">
    phone:
    <input type="phone" class="phone" id="phone" placeholder="" bind:value={phone}>
  </label>
  <label for="email">
    email:
    <input type="email" class="email" id="email" placeholder="" bind:value={email}>
  </label>
  <label for="password">
    password:
    <input type="password" class="password" id="password" placeholder="" bind:value={password}>
  </label>
  <label for="city">
    city:
    <input type="city" class="city" id="city" placeholder="" bind:value={city}>
  </label>
  <label for="state">
    state:
    <input type="state" class="state" id="state" placeholder="" bind:value={state}>
  </label>
  <label for="country">
    country:
    <input type="country" class="country" id="country" placeholder="" bind:value={country}>
  </label>
  <button type="submit" class="submit-button">Sign up</button>
</form>