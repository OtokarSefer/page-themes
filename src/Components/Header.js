import { useContext } from "react"
import { ThemeContext } from "../Theme.js"
import '../index.css'

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  )
}

export default Header
