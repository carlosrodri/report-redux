import Router from "./routes/router"
import './index.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import ChakraTheme from './theme.js'
import { Provider } from "react-redux"
import store from "app/store"

function App() {
  const theme = extendTheme(ChakraTheme)
  return (
    <ChakraProvider theme={theme}>
        <Provider store={store}>
      <Router />

        </Provider>
    </ChakraProvider>
  )
}

export default App