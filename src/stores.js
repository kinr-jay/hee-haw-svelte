import { writable } from "svelte/store"

export const trip = writable({
  title: "Post Wedding Hee-Haw",
  description:
    "Following the holy matrimony of Carly Jacobs and Dan Burt, a select number of special guests will accompany Connor on a glorious adventure into the Sangre de Cristo mountains. Details are yet to be determined, but the trip is planned for 3 nights. This will allow ample opportunities for sun bathing, lake bathing, tree bathing, and even the less well understood rock bathing. Currently it looks as though it will be the first backpacking trip for the illustrious Wesley Johnson, and so special considerations will be made to ensure he experiences at least a little bit of misery.",
  image: "https://nothingisreal.net",
  startDate: "2021-09-13",
  endDate: "2021-09-16",
  area: "San Isabel National Forest, Sangre de Cristo Wilderness Area",
  regs: "Standard Wilderness Area regulations",
  muster: "tbd",
  distance: 0,
  elevation: 0,
  groupSize: 6,
  gearList: [
    "tent",
    "sleeping bag",
    "boots",
    "sleeping pad",
    "fly rod",
    "whiskey",
    "extra puffy",
  ],
  completed: false,
  report: "TBD",
})

export const logged = writable(false)
