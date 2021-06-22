<script>
	// Component and Route Imports
	import { onMount } from "svelte"
	import { Router, Route, navigate } from "svelte-routing"
	import ProtectedRoute from "./components/ProtectedRoute.svelte"
	import Header from "./components/Header.svelte"
	import Login from "./routes/Login.svelte"
	import Register from "./routes/Register.svelte"
	import Planner from "./routes/Planner.svelte"
	import Calendar from "./routes/Calendar.svelte"
	import TripPage from "./routes/TripPage.svelte"
	import Account from "./routes/Account.svelte"
	import Footer from "./components/Footer.svelte"

</script>

<Router primary={false}>
	<Header />
	<main>
		<Route path="/" component={Login}/>
		<Route path="/register" component={Register}/>
		<ProtectedRoute path="/planner" component={Planner}/>
		<ProtectedRoute path="/calendar/:tripId" component={TripPage}/>
		<ProtectedRoute path="/calendar" component={Calendar}/>
		<ProtectedRoute path="/account" component={Account}/>
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