<script>
  let email
  let password
</script>

<style>
  form {
    margin-top: 10vh;
  }
  label {
    width: 260px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
</style>

<h1>Login to join the Hee-Haw!</h1>
<form action="">
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