import styles from "@/styles/home.module.scss"
import { createFileRoute, Link } from "@tanstack/react-router"

const Home = () => {
    return (
        <>
            <section className={styles.hero}>
                <img src="/logo.png" alt="Logo" />
                <h1>
                    Gittes <br />
                    <span>Glamping</span>
                </h1>
                <Link to="/aktiviteter">Book nu</Link>
            </section>

            <section className={styles.intro}>
                <h2>Kom og prøv glamping hos Gitte!</h2>

                <p>
                    Vi er stolte af at byde dig velkommen til Gitte’s Glamping,
                    hvor hjertevarme og omsorg møder naturens skønhed og
                    eventyr. Vores dedikerede team, anført af Gitte selv, er her
                    for at skabe den perfekte ramme om din luksuriøse
                    udendørsoplevelse. Vi stræber efter at skabe minder og
                    fordybelse, uanset om du besøger os som par, familie eller
                    soloeventyrer. Vi tilbyder en bred vifte af aktiviteter og
                    arrangementer, der passer til alle aldre og interesser.
                    Udforsk naturen, slap af ved bålet, del historier med nye
                    venner, eller find indre ro med vores wellnessaktiviteter.
                </p>

                <img src="/gitte.jpg" alt="Gitte" />

                <Link to="/ophold">Se vores ophold</Link>
            </section>

            <section className={styles.reviews}>

            </section>
        </>
    )
}

export const Route = createFileRoute("/")({
    component: Home,
})
