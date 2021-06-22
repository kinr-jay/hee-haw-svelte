import { writable } from "svelte/store"
import { blankTrip } from "./blankTrip.js"
import { navigate } from "svelte-routing"

const url = "https://hee-haw-go.herokuapp.com"

export const selectedTrip = writable(blankTrip)

// All Trip Read Function
const allTrips = () => {
  const { subscribe, set } = writable(null)

  const load = async (jwt) => {
    fetch(url + "/trips", {
      method: "get",
      headers: {
        Authorization: "Bearer " + jwt.token,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          return res.status
        } else {
          return res.json()
        }
      })
      .then((data) => set(data))
  }

  return {
    subscribe,
    load: load,
  }
}

export const trips = allTrips()

// Single Trip CRUD Functions
const singleTrip = () => {
  const { subscribe, set } = writable(null)

  // GET trip by tripId
  const load = async (jwt, tripId) => {
    fetch(url + "/trips/" + tripId, {
      method: "get",
      headers: {
        Authorization: "Bearer " + jwt.token,
      },
    })
      .then((res) => res.json())
      .then((data) => set(data))
  }

  // POST create a new trip
  const post = async (jwt, trip) => {
    fetch(url + "/trips", {
      method: "post",
      headers: {
        "Authorization": "Bearer " + jwt.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trip),
    })
      .then((res) => {
        if (res.status === 200) {
          selectedTrip.set(blankTrip)
          navigate("/calendar")
        } else {
          alert("Unable to create trip.")
        }
      })
  }

  // PUT update a trip
  const put = async (jwt, trip) => {
    fetch(url + "/trips/" + trip.tripId, {
      method: "put",
      headers: {
        "Authorization": "Bearer " + jwt.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trip),
    })
      .then((res) => {
        if (res.status === 200) {
          selectedTrip.set(blankTrip)
          navigate("/calendar")
        } else {
          alert("Unable to update trip.")
        }
      })
  }

  // PUT add user to team
  const joinTeam = async (jwt, tripId) => {
    fetch(url + "/trips/" + tripId + "/add/" + jwt.userId, {
      method: "put",
      headers: {
        "Authorization": "Bearer " + jwt.token,
      }
    })
      .then((res) => {
        if (res.status === 200) {
          navigate("/calendar/" + tripId, { replace: true })
        } else {
          alert("Unable to join trip.")
        }
      })
  }

  // PUT remove user from team
  const leaveTeam = async (jwt, tripId) => {
    fetch(url + "/trips/" + tripId + "/remove/" + jwt.userId, {
      method: "put",
      headers: {
        "Authorization": "Bearer " + jwt.token,
      }
    })
      .then((res) => {
        if (res.status === 200) {
          navigate("/calendar/" + tripId, { replace: true })
        } else {
          alert("Unable to remove from trip.")
        }
      })
  }

  return {
    subscribe,
    load: load,
    post: post,
    put: put,
    joinTeam: joinTeam,
    leaveTeam: leaveTeam,
  }
}

export const trip = singleTrip()
