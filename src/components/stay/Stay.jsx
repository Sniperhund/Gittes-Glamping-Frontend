import styles from "./Stay.module.scss";

export const Stay = () => {
    return (
        <section className={styles.staySection}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Vores ophold</h1>
                <h2 className={styles.h2}>Vi har ophold til enhver smag</h2>
                <p className={styles.text}>
                    Vores glampingophold er skabt til at tilbyde en kombination
                    af eventyr og afslapning. Det er den ideelle flugt fra byens
                    støj og stress – det perfekte sted at genoplade batterierne
                    i en naturskøn indstilling. Book dit ophold i dag, og giv
                    dig selv lov til at fordybe dig i naturen og nyde luksus i
                    det fri. Vi ser frem til at byde dig velkommen til en
                    oplevelse fyldt med komfort, eventyr og skønhed.
                </p>
            </div>
        </section>
    );
};
