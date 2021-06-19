import { writable } from "svelte/store"
import { seed } from "./seed.js"

export const trips = writable(seed)

export const selectedTrip = writable(seed[0])

export const logged = writable(false)
