import Page from "./Components/Page.js"
import { ThemeProvider } from "./Theme.js"

const App = () => {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  )
}

export default App
