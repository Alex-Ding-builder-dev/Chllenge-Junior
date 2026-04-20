import { BrowserRouter , Routes , Route } from "react-router"
import Home from "../pages/Home"
import SignUp from "../pages/SignUp"

export default function App() {
  return (
    <BrowserRouter basename="/officelite-coming-soon-page/result/index.html">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}