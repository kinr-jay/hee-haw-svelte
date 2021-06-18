<script>
  import {Link} from "svelte-navigator"
  // import Logo from "./Logo"
</script>

<style>
  header {
    margin: 0;
    padding: 25px 25%;
    display: flex;
    align-items: center;
    /* width: 100%; */
    justify-content: space-between;
    background-color: blue;
  }
  .nav-links {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    margin-left: 40%;
  }
  .logo {
    color: white;
    font-size: 1.5em;
  }

</style>

<header>
  <span class="logo">Hee-Haw</span>
  <div class="nav-links">
    <Link to="/planner">Plan a Trip</Link>
    <Link to="/calendar">Calendar</Link>
    <Link to="/account">Account</Link>
  </div>
</header>