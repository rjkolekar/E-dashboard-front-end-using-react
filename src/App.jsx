
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Products from './Components/Products'
import AddProduct from './Components/AddProduct'
import Profile from './Components/Profile'
import UpdateProduct from './Components/UpdateProduct'
import Logout from './Components/Logout'

import Register from './Components/Register'

import Navbar from './Navbar'
import SignUp from './Components/SignUp'
// import Sidebar from './Components/Sidebar'
import PrivateComponent from './Components/PrivateComponent'
// import Sidebar from './Components/Sidebar'

function App() {
  return (
    <>
    <Router>
     <Navbar />
        <Routes>

          <Route element= {<PrivateComponent />} >
          <Route path='/' element={<Products />}></Route>
          <Route path='/add'element={<AddProduct />}></Route>
          <Route path='/update'element={<UpdateProduct />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          </Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/register' element={<Register />}></Route>
          {/* <Route path='/sidebar' element={<Sidebar />}></Route> */}

        </Routes>
    </Router>
    </>
  )
}

export default App
