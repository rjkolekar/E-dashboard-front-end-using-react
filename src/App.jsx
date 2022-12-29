
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Products from './Components/Products'
import AddProduct from './Components/AddProduct'
import Profile from './Components/Profile'
import UpdateProduct from './Components/UpdateProduct'
import SignUp from './Components/SignUp'
import PrivateComponent from './Components/PrivateComponent'
import Sidebar from './Sidebar'
import TempComponent from './Components/TempComponent'
import Login from './Components/Login'


function App() {
  return (
    <>
    <Router>
     <Sidebar />
        <Routes>

          <Route element= {<PrivateComponent />} >
          <Route path='/' element={<Products />}></Route>
          <Route path='/add'element={<AddProduct />}></Route>
          <Route path='/update'element={<UpdateProduct />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          </Route>

          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>

          <Route path='/temp' element={<TempComponent />}></Route>
          

        </Routes>
    </Router>
    </>
  )
}

export default App
