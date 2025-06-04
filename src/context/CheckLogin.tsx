import { Navigate, useLocation } from "react-router"
import { useAuth } from "./AuthContext"
import type { PageContainerProps } from "../types/types"

export default function CheckLogin({ children }: PageContainerProps) {

    const { token } = useAuth()
    const location = useLocation()

    console.log(location)

    if(token){
        // no token - redirect to login
        return <Navigate to="/secrets" state={{ from: location }} />
    }

    return children
}