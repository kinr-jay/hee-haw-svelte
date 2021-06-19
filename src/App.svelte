<script>
	// Component and Route Imports
	import { Router, Route } from "svelte-routing"
	import Header from "./components/Header.svelte"
	import Login from "./routes/Login.svelte"
	import Register from "./routes/Register.svelte"
	import Planner from "./routes/Planner.svelte"
	import Calendar from "./routes/Calendar.svelte"
	import TripPage from "./routes/TripPage.svelte"
	import Account from "./routes/Account.svelte"
	import Footer from "./components/Footer.svelte"

	// Store Imports
	import { logged } from "./stores.js"

	let loggedIn
	logged.subscribe(value => {
		loggedIn = value
	})

</script>

<Router primary={false}>
	<Header />
	<main>
		<Route path="/" component={Login}/>
		<!-- {#if loggedIn} -->
		<Route path="/register" component={Register}/>
		<Route path="/planner" component={Planner}/>
		<Route path="/calendar/:tripId" component={TripPage}/>
		<Route path="/calendar" component={Calendar}/>
		<Route path="/account" component={Account}/>
		<!-- {/if} -->
	</main>
	<Footer />
</Router>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 300px;
		margin: 0 auto;
	}

	@media only screen and (min-width: 475px) {
		main {
			max-width: 650px;
		}
	}

</style>