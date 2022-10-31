<script>
  export let handleSubmit
  export let value
  export let buttonLabel
  export let isNewUser

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

<form on:submit|preventDefault={handleSubmit}>
  <label for="firstName">
    first name:
    <input type="text" id="firstName" placeholder="" bind:value={value.firstName}>
  </label>
  <label for="lastName">
    last name:
    <input type="text" id="lastName" placeholder="" bind:value={value.lastName}>
  </label>
  <label for="phone">
    phone:
    <input type="text" id="phone" placeholder="" bind:value={value.phone}>
  </label>
  <label for="email">
    email:
    <input type="email" id="email" placeholder="" bind:value={value.email}>
  </label>
  {#if isNewUser}
  <label for="password">
    password:
    <input type="password" id="password" placeholder="" bind:value={value.password}>
  </label>
  {/if}
  <label for="city">
    city:
    <input type="text" id="city" placeholder="" bind:value={value.location.city}>
  </label>
  <label for="state">
    state:
    <input type="text" id="state" placeholder="" bind:value={value.location.state}>
  </label>
  <label for="country">
    country:
    <input type="text" id="country" placeholder="" bind:value={value.location.country}>
  </label>
  {#if isNewUser}
  <label for="password">
    Verify password:
    <input type="password" id="password" placeholder="" bind:value={value.password}>
  </label>
  {/if}
  <button type="submit" class="submit-button">{buttonLabel}</button>
</form>
