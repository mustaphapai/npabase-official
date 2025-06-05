import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from "../src/pages/homepage"// Import the HomePage component
import Signup from "../src/pages/signup" // Import the Signup component
import Login from "../src/pages/login" // Import the Login component
import Password from './pages/password'
import Dashboard from './pages/dashboard' // Import the Dashboard component
import Admissions from './pages/admissions'
import ViewPost from './pages/post_view'
import Study from './pages/study' // Import the Study component
import CreatePost from './pages/post'

function App() {
 

  return (
    <HashRouter>
            <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/password" element={<Password />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/view" element={<ViewPost />} />
        <Route path="/study" element={<Study />} />
        <Route path="/createpost" element={<CreatePost />} />
     
      </Routes>
    </HashRouter>
  )
}

export default App
