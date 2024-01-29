import Keycloak from "keycloak-js"

let initOptions = {
  // url: "http://localhost:8080/",
  // url: "http://172.18.0.2:8080/",
  url: "http://192.168.1.130:8080/",
  // url: "http://172.25.192.75:8080/",
  realm: "demo",
  clientId: "react-demo",
}

const kc = new Keycloak(initOptions)
// const kc = new Keycloak("/keycloak.json");

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
  kc.init({
    onLoad: "login-required",
    checkLoginIframe: true,
    // silentCheckSsoRedirectUri:
    //   window.location.origin + "/silent-check-sso.html",
    pkceMethod: "S256",
  })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!")
      }
      onAuthenticatedCallback()
    })
    .catch(console.error)
}

const doLogin = kc.login

const doLogout = kc.logout

const getToken = () => kc.token

const getTokenParsed = () => kc.tokenParsed

const isLoggedIn = () => !!kc.token

const updateToken = (successCallback) =>
  kc.updateToken(5).then(successCallback).catch(doLogin)

const getUsername = () => kc.tokenParsed?.preferred_username

const hasRole = (roles) => roles.some((role) => kc.hasRealmRole(role))

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  getTokenParsed,
  updateToken,
  getUsername,
  hasRole,
}

export default UserService
