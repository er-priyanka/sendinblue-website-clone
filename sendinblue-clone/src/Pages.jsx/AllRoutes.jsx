import { Routes, Route } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { Home } from "./Home"
import { Pricing } from "./Pricing"
import { Login } from "./Login"
import { Signup } from "./Signup"
import { PrivateRoute } from "../Components/PrivateRoute"

export const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={
                <Login />
            } />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}