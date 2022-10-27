import './App.css'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Productid from './pages/ProductId'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Purchases from './pages/Purchases'
import LoginScreen from './pages/LoginScreen'
import Header from './components/shared/Header'

function App() {
    return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<Productid />}/>
        <Route path='/login' element={<LoginScreen />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/purchases' element={<Purchases />}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
