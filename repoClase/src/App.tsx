import './App.css'
import Button from "./components/Button/Button"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import CartWidget from "./components/CartWidget/CartWidget"

function App() {

  return (
      <div>
        <NavBar/>
        <ItemListContainer/>
        <CartWidget/>
      </div>
  )
}

export default App
