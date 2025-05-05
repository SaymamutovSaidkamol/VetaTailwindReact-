import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Menu from './components/Menu/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Menu/>
     <Footer/>
    </>
  )
}

export default App
