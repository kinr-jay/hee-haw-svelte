<script>
	import { Router, Route } from "svelte-navigator"
	import Header from "./components/Header.svelte"
	import Login from "./routes/Login.svelte"
	import Register from "./routes/Register.svelte"
	import Planner from "./routes/Planner.svelte"
	import Calendar from "./routes/Calendar.svelte"
	import TripPage from "./routes/TripPage.svelte"
	import Account from "./routes/Account.svelte"
	import Footer from "./components/Footer.svelte"

</script>

<Router>
	<Header />
	<main>
		<Route path="/" component={Login}/>
		<Route path="/register" component={Register}/>
		<Route path="/planner" component={Planner}/>
		<Route path="/calendar/*" let:params>
			<Route path=":tripId" component={TripPage}/>
			<Route path="" component={Calendar}/>
		</Route>
		<Route path="/account" component={Account}/>
	</main>
	<Footer />
</Router>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	/* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

</style>