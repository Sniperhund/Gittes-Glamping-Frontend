import styles from "../ActivitiesHeader/activitiesheader.module.css";

const ActivitiesHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
                <div className={styles.header}>
                    <h1 className={styles.h1}>Aktiviteter</h1>
                </div>
            </div>
        </div>
    );
};

export default ActivitiesHeader;
