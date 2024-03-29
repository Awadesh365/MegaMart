import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("jwt_auth")))
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const UserAuth = () => {
    return (
        useContext(AuthContext)
    )

}

