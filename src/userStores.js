import { navigate } from "svelte-routing"
import { writable } from "svelte/store"

// Heroku Backend Route URL
const url = "https://hee-haw-go.herokuapp.com"

// This function creates a user store that is used to hold a user's account information.
const createUser = () => {
  const { subscribe, set } = writable(null)

  const getUser = async (jwt) => {
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

  const logout = () => {
    set(null)
    jwt.clearJWT()
    navigate("/")
  }

  return {
    subscribe,
    getUser: getUser,
    logout: logout,
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
    return fetch(url + "/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginCreds),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage["schmekel"] = JSON.stringify(data)
        set(JSON.stringify(data))
        user.getUser(data)
        return true
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
