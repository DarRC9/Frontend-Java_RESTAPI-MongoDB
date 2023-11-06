import './App.css'
import UserForm from './UserForm/UserForm'
// import UsersData from './components/UsersData/UsersData'
import Home from './HomePage/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {

  return (  
    <div className='app'>
      <BrowserRouter>
        <nav>
          <div className='navbar'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/userForm' className='link'>Form</Link>
            {/* <Link to='/users' className='link'>Users</Link> */}
          </div>
        </nav>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/userForm' element={<UserForm/>}/>
            {/* <Route path='/users' element={<UsersData/>}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>   
  )
}

export default App
