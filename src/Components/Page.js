import { useContext } from "react"
import Header from "./Header.js"
import { ThemeContext } from "../Theme.js"

const Page = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div id="app" className={theme}>
      <Header />
      <article>
        <h2>React Course</h2>
        <p>A course that teaches you React hopefully.</p>
      </article>
    </div>
  )
}

export default Page
