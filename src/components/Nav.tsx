import { useEffect, useState } from "react"
import styles from "./Nav.module.scss"
import { Link, useRouter } from "@tanstack/react-router"

export const Nav = ({ homePage }: { homePage: boolean }) => {
    const [open, setOpen] = useState(false)
    
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = router.subscribe("onRendered", () => {
            setOpen(false)
        })

        return () => unsubscribe()
    }, [])

    return <nav>
        <div>
            {!homePage ? <Link to="/"><img className={styles.logo} src="/logo.png" alt="Logo" /></Link>: <div />}

            <button className={styles.icon} onClick={() => setOpen(true)}>
                <i className="fa-solid fa-bars" />
            </button>
        </div>

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
