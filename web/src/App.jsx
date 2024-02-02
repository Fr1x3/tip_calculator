import Calculator from "./components/Calculator"
import Header from "./components/Header"


function App() {

  return (
    <div className="w-full min-h-screen bg-cian-200 grid grid-rows-[1fr_4fr] justify-items-center">
      <Header/>
      <Calculator/>
    </div>
  )
}

export default App
