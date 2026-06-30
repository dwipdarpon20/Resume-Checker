import AppRoutes from "./routes/AppRoutes"
import { AuthProvider } from "./context/auth/authContext"
import { InterviewProvider } from "./context/ai/interview.context"

function App() {

  return (
    <AuthProvider>
      <InterviewProvider>
        <AppRoutes/>
      </InterviewProvider>
    </AuthProvider>  
  )
}

export default App
