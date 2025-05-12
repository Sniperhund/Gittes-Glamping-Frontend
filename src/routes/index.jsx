import styles from "@/styles/home.module.scss";
import { createFileRoute } from "@tanstack/react-router";

const Home = () => {
    return <section className={styles.hero}>
    </section>
}

export const Route = createFileRoute("/")({
    component: Home,
})
