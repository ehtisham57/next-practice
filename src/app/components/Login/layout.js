"use client"
import "./Login.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
const Layout = ({ children }) => {
    const pathname = usePathname()
    console.log(pathname);
    return (
        <>

            {
                pathname !== "/components/Login/techerLogin" ?
                        <div className="nav">
                            <ul>
                                <li><Link href="/components/Login">Main Login</Link></li>
                                <li><Link href="/components/Login/studentsLogin">Students Login</Link></li>
                                <li><Link href="/components/Login/techerLogin">Teachers Login</Link></li>
                            </ul>
                        </div>:<Link href="/components/Login">Go to main Login</Link>
            }

            {children}

        </>
)}

export default Layout
