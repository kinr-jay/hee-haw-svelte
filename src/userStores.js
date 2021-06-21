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
  const { subscribe, set } = writable(localStorage["schmekel"])

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
        localStorage["schmekel"] = JSON.stringify(data)
        console.log(localStorage["schmekel"])
        console.log(data)
        set(data)
        user.getUser(data)
        console.log(data.message)
      })
      .catch((err) => console.error(err))
  }

  // clear a token / logout
  const clearJWT = () => {
    localStorage.clear()
    set(localStorage["schmekel"])
  }

  return {
    subscribe,
    getJWT: getJWT,
    // checkJWT: checkJWT,
    clearJWT: clearJWT,
  }
}

export const jwt = createJWT()
