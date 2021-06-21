import { writable } from "svelte/store"

// Heroku Backend Route URL
const url = "https://hee-haw-go.herokuapp.com"

// This function creates a user store that is used to hold a user's account information.
const createUser = () => {
  const { subscribe, set } = writable(null)

  const getUser = (jwt) => {
    fetch(url + "/users/" + jwt.userId, {
      method: "get",
      headers: {
        Authorization: "Bearer " + jwt.token,
      },
    })
      .then((res) => res.json())
      .then((data) => set(data))
      .catch((err) => console.error(err))
  }

  return {
    subscribe,
    getUser: getUser,
  }
}
export const user = createUser()

//////// JWT ////////////////
// This function creates a jwt store with the following functions:
// - create a new token
// - check the expiration of the current token
/////////////////////////////
const createJWT = () => {
  const { subscribe, set } = writable(null)

  // create a new JWT with email and password login credentials.
  const getJWT = async (loginCreds) => {
    fetch(url + "/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginCreds),
    })
      .then((res) => res.json())
      .then((data) => {
        window.localStorage["schmekel"] = data
        set(data)
        user.getUser(data)
        console.log(data.message)
      })
      .catch((err) => console.error(err))
  }

  // check the validity of a token in a user's local storage
  const checkJWT = async (jwt) => {
    return await fetch(url + "/check-auth", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jwt),
    })
      .then((res) => res.json())
      .then((data) => {
        // StatusCode 200 means a new token was sent.
        if (data.statusCode === 200) {
          window.localStorage["schmekel"] = data
          set(data)
          return true
        } else {
          clearJWT()
          return false
        }
      })
  }

  // clear a token / logout
  const clearJWT = () => {
    localStorage.clear()
    set(localStorage["schmekel"])
  }

  return {
    subscribe,
    getJWT: getJWT,
    checkJWT: checkJWT,
    clearJWT: clearJWT,
  }
}

export const jwt = createJWT()

// export const user = writable({
//   firstName: "Connor",
//   lastName: "Jacobs",
//   email: "cjacob22@gmail.com",
//   phone: "314-540-4529",
//   trips: [
//     {
//       tripId: 1,
//       title: "Big Trees, Ragged Peaks",
//       description:
//         "In my minds eye! I can see us basking in the dappled sunlight flitting through the upper reaches of the canopy of the unequivocally GIANT! Sequoias. May we greet our reflections in the icy waters of the alpine, and PLUNGE! headfirst to be reborn as one with ourselves. And if we DARE! We will stand atop a jagged pile of rock that is both crumbling apart and vaulting skyward in a daring battle of planetary forces, where we will lean into the wind as it WHIPS! upward to deliver our shouts into the heavens!",
//       image: "https://farm1.staticflickr.com/85/223172389_ea8cb1fd1d_o.jpg",
//       startDate: "2021-08-02",
//       endDate: "2021-08-010",
//       area: "Sequoia National Park",
//       regs: "Max party: 15 (12 offtrail); Bear cannisters",
//       muster: "The Ace Hardware Store on Colfax",
//       distance: 25,
//       elevation: 8000,
//       groupSize: 10,
//       gearList: ["tent", "sleeping bag", "boots"],
//       team: null,
//       report: "TBD",
//     },
//     {
//       tripId: 2,
//       title: "CMC BPX Macey Lakes / Colony Baldy",
//       description:
//         "Connor's 'Leader in Training' Trip into the Sangre de Cristo Mountains with the Colorado Mountain Club. This one-night backpack will hope to explore a lesser-travelled drainage on the east side of the range, home to the Macey Lakes. The morning of the second day will feature a spirited jaunt up loose talus and delicate tundra to the summit of Colony Baldy. From there we may be inspired to hoot and holler at those climbing our southern stalwart neighbor, Humboldt Peak. From there we return to the lakes, pack up camp, and depart in hopes of avoiding the weekend patriots.",
//       image:
//         "https://peakvisor.com/photo/d/db/Humboldt_Peak_from_near_south_colony_lakes_trailhead.jpg",
//       startDate: "2021-07-01",
//       endDate: "2021-07-02",
//       area: "San Isabel National Forest, Sangre de Cristo Wilderness Area",
//       regs: "Standard Wilderness Area regulations",
//       muster: "tbd",
//       distance: 16,
//       elevation: 4600,
//       groupSize: 4,
//       gearList: ["tent", "sleeping bag", "boots"],
//       team: null,
//       report: "TBD",
//     },
//     {
//       tripId: 3,
//       title: "Post Wedding Hee-Haw",
//       description:
//         "Following the holy matrimony of Carly Jacobs and Dan Burt, a select number of special guests will accompany Connor on a glorious adventure into the Sangre de Cristo mountains. Details are yet to be determined, but the trip is planned for 3 nights. This will allow ample opportunities for sun bathing, lake bathing, tree bathing, and even the less well understood rock bathing. Currently it looks as though it will be the first backpacking trip for the illustrious Wesley Johnson, and so special considerations will be made to ensure he experiences at least a little bit of misery.",
//       image:
//         "https://static.rootsrated.com/image/upload/s--C0BiPQCl--/t_rr_large_traditional/oqprqxsy5wuhirctohnm.jpg",
//       startDate: "2021-09-13",
//       endDate: "2021-09-16",
//       area: "San Isabel National Forest, Sangre de Cristo Wilderness Area",
//       regs: "Standard Wilderness Area regulations",
//       muster: "tbd",
//       groupSize: 6,
//       gearList: [
//         "tent",
//         "sleeping bag",
//         "boots",
//         "sleeping pad",
//         "fly rod",
//         "whiskey",
//         "extra puffy",
//       ],
//       team: null,
//       report: "TBD",
//     },
//   ],
// })
