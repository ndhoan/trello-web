import React from "react"
import ReactDOM from "react-dom/client"
import App from "~/App.jsx"
import CssBaseline from "@mui/material/CssBaseline"
// import { ThemeProvider } from '@emotion/react'
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material"
import theme from "~/theme"
import UserService from "~/services/UserService"

const renderApp = () =>
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <CssVarsProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </CssVarsProvider>
    </React.StrictMode>
  )

UserService.initKeycloak(renderApp)
