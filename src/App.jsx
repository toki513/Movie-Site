
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import NavBar from "./components/NavBar"
import { Routes,Route } from 'react-router-dom'

import './css/App.css'

function App() {
 
  return (
  
    <div>
      <NavBar></NavBar>
      
      <main className='main-content'>
        <Routes>
           <Route path='/' element={<Home/>} />
          <Route path='/favourite' element={<Favourites></Favourites>} />
       
        </Routes>

      </main>
      </div>
       
    
  )
}

export default App
