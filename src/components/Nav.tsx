import styles from "./Nav.module.scss"

export const Nav = ({ homePage }: { homePage: boolean }) => {
    return <nav>
        <button className={styles.icon}>
            <i className="fa-solid fa-bars" />
        </button>
    </nav>
}
