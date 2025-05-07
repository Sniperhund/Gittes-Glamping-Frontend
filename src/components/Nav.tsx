import { useState } from "react"
import styles from "./Nav.module.scss"
import { Link } from "@tanstack/react-router"
import logo from "../assets/logo.png"

export const Nav = ({ homePage }: { homePage: boolean }) => {
    const [open, setOpen] = useState(false)

    return <nav>
        <img className={styles.logo} src={logo} alt="Logo" />

        <button className={styles.icon} onClick={() => setOpen(true)}>
            <i className="fa-solid fa-bars" />
        </button>

        <ul className={`${styles.nav} ${open && styles.active}`}>
            <button className={styles.close} onClick={() => setOpen(false)}>
                <i className="fa-solid fa-xmark" />
            </button>
            <li>
                <Link to="/ophold">Ophold</Link>
            </li>
            <li>
                <Link to="/kontakt">Kontakt</Link>
            </li>
            <li>
                <Link to="/aktiviter">Aktiviter</Link>
            </li>
            <li>
                <Link to="/min-liste">Min Liste</Link>
            </li>
            <li>
                <Link to="/backoffice">Backoffice</Link>
            </li>
        </ul>
    </nav>
}
