import Dashboard from "./components/Dashboards"
import Functionality from "./components/Functionaity"
import Navhero from "./components/Navhero"


function App() {


  return (
    <main className="flex flex-col min-h-screen">
      <Navhero/>
      <Dashboard/>
      <Functionality/>
    </main>
  )
}

export default App
