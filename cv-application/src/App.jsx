import GeneralInfo from "./components/GeneralInfo"
import Education from "./components/Education"
import Experience from "./components/Experience"

function App() {
  return (
    <div className="app">
      <h1>Mi CV</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  )
}

export default App