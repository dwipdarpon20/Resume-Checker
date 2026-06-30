import {Routes, Route} from 'react-router'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import Home from '../pages/interview/Home'
import Protected from '../components/Protected'
import { InterviewReport } from '../pages/interview/InterviewReport'
import ResultPage from '../pages/interview/ResultPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path='/login' element={<Login/>}/>
      <Route element={<Protected/>}>
        <Route path='/' element={ <Home/>}/>
        <Route path = "/interview/:interviewId" element ={ <ResultPage/> }/>
        <Route path = "*" element ={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes