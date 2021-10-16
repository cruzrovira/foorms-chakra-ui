import React from "react"
import ReactDOM from "react-dom"
import { ChakraProvider } from "@chakra-ui/react"
import Theme from "./Theme"
import Home from "./Pages/Home"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <Home />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
