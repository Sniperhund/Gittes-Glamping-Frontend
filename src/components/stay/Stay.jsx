import styles from "./Stay.module.scss";

export const Stay = () => {
    return (
        <>
            <section className={styles.staySection}>
                <div className={styles.container}>
                    <h1 className={styles.heading}>Vores ophold</h1>
                    <p className={styles.text}>
                        Vores glampingophold er skabt til at tilbyde en
                        kombination af eventyr og afslapning. Det er den ideelle
                        flugt fra byens støj og stress – det perfekte sted at
                        genoplade batterierne i en naturskøn indstilling. Book
                        dit ophold i dag, og giv dig selv lov til at fordybe dig
                        i naturen og nyde luksus i det fri. Vi ser frem til at
                        byde dig velkommen til en oplevelse fyldt med komfort,
                        eventyr og skønhed.
                    </p>
                </div>
            </section>

            <section className={styles.offerSection}>
                <div className={styles.offerContainer}>
                    <h1>Weekendtur</h1>
                    <h2>2 personer</h2>
                    <h3>Fra 4200,-</h3>
                </div>
                <button className={styles.button}>Læs mere</button>
            </section>
        </>
    );
};
