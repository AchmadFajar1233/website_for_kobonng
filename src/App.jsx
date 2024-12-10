import AppRouter from "./routers/router"
import { BrowserRouter as Router } from "react-router-dom"

export default function App() {
  return (
    <div className="overflow-x-hidden min-h-screen relative">
      <Router>
        <AppRouter />
      </Router>
    </div>
  )
}
