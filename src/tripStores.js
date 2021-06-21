import { writable } from "svelte/store"
import { blankTrip } from "./blankTrip.js"

const url = "https://hee-haw-go.herokuapp.com"

const allTrips = () => {
  const { subscribe, set } = writable(null)

  const load = (jwt) => {
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
      .then((data) => {
        set(data)
      })
  }

  return {
    subscribe,
    load: load,
  }
}

export const trips = allTrips()

const singleTrip = () => {
  const { subscribe, set } = writable(null)

  const load = (jwt, tripId) => {
    fetch(url + "/trips/" + tripId, {
      method: "get",
      headers: {
        Authorization: "Bearer " + jwt.token,
      },
    })
      .then((res) => res.json())
      .then((data) => set(data))
  }

  return {
    subscribe,
    load: load,
  }
}

export const trip = singleTrip()

export const selectedTrip = writable(blankTrip)
