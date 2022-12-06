<script>
	// Component and Route Imports
	import { Router, Route, navigate } from "svelte-routing"
	import ProtectedRoute from "./components/ProtectedRoute.svelte"
	import Account from "./routes/Account.svelte"
	import AccountUpdate from "./routes/AccountUpdate.svelte"
	import AreYouSure from "./routes/AreYouSure.svelte"
	import Calendar from "./routes/Calendar.svelte"
	import Footer from "./components/Footer.svelte"
	import Header from "./components/Header.svelte"
	import Login from "./routes/Login.svelte"
	import Register from "./routes/Register.svelte"
	import TripCreate from "./routes/TripCreate.svelte"
	import TripDisplay from "./routes/TripDisplay.svelte"
	import TripUpdate from "./routes/TripUpdate.svelte"

</script>

<Router primary={false}>
	<Header />
	<main>
		<Route path="/" component={Login}/>
		<Route path="/register" component={Register}/>
		<ProtectedRoute path="/create-trip" component={TripCreate}/>
		<ProtectedRoute path="/calendar/:tripId" component={TripDisplay}/>
		<ProtectedRoute path="/update-trip/:tripId" component={TripUpdate}/>
		<ProtectedRoute path="/calendar" component={Calendar}/>
		<ProtectedRoute path="/account" component={Account}/>
		<ProtectedRoute path="/update-account" component={AccountUpdate}/>
		<ProtectedRoute path="/are-you-sure" component={AreYouSure}/>
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
