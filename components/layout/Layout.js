import Link from "next/link"
import { useState, useEffect} from "react"
import { Typography } from "@mui/material"
import styles from "../layout/Layout.module.scss"


const Layout = ({ children }) => {

    const [open, setOpen] = useState(false)
    const [background, setBackground] = useState(false)

    useEffect(() => {
        const closenavbarsmall = e => {
            if (e.target.id !== "hamburger") {
                setOpen(false)
            }
        };
        document.body.addEventListener("click", closenavbarsmall);
        return () => document.body.removeEventListener("click", closenavbarsmall);
    }, [])


    return (
        <>
            <header className={styles.container}>
                <div className={open ? styles.menuOpen : styles.menuClose}>
                    <ul>
                        <li>
                            <Link href="/">
                                <Typography fontSize={20} fontWeight={"bold"} color="white">Home</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Typography fontSize={20} fontWeight={"bold"} color="white">Blog</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Typography fontSize={20} fontWeight={"bold"} color="white">About Me</Typography>
                            </Link>
                        </li>
                    </ul>
                </div>
                <button
                    id="hamburger"
                    style={{
                        background: "none",
                        border: "none",
                        display: open ? "none" : ""
                    }}
                    open={open}
                    onClick={() => setOpen(prev => !prev)}
                    className={styles.hamburgerMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className={styles.logo}>
                    <Typography
                        fontSize={30}
                        fontWeight={"bold"}
                        color="white">
                        JT<span>F</span>
                    </Typography>
                </div>
            </header>
            <div>
                {children}
            </div>
            <footer>
            </footer>

            <style jsx>
                {``}
            </style>
        </>
    )
}

export default Layout