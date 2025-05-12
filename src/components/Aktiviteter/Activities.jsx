import { useEffect, useState } from "react";
import styles from "../Aktiviteter/Activities.module.css";

const Activities = () => {
    const [activities, setActivities] = useState([]); // Pluralized state variable
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getActivities = async () => {
            setActivities([
                {
                    title: "Hej med dig",
                    description: "Hej med beskrivelse",
                    weekday: "Hej med Mandag",
                    image: "https://cdn.discordapp.com/attachments/1138365325553975306/1356723307537498304/image.png?ex=6821adcb&is=68205c4b&hm=1184d14d9e2baf57c455fc10489899663c6020f3014250ec462fa15da6d79ea6&",
                    time: "Hej med 17:00",
                },
                {
                    title: "Aktivitet",
                    description: "Beskrivelse",
                    weekday: "Mandag",
                    image: "https://cdn.discordapp.com/attachments/1138365325553975306/1356723307537498304/image.png?ex=6821adcb&is=68205c4b&hm=1184d14d9e2baf57c455fc10489899663c6020f3014250ec462fa15da6d79ea6&",
                    time: "17:00",
                },
            ]);
            setLoading(false);

            return;

            try {
                const response = await fetch(
                    `https://ncgkwcw00o4cgs88g8044wkw.lucasskt.dk/activities`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch activities");
                }

                const result = await response.json();

                if (result?.data) {
                    setStays(result.data);
                } else {
                    setError("No activities found");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getActivities();
    }, []);

    if (loading) {
        return <p>Loading activities...</p>;
    }

    if (error) {
        return <p className={styles.error}>Error: {error}</p>;
    }

    return (
        <div className={styles.container}>
            {activities.length > 0 ? (
                activities.map((activity) => (
                    <div key={activity._id} className={styles.stay}>
                        <div className={styles.activity}>
                            <h1 className={styles.h1}>{activity.title}</h1>
                            <p className={styles.p1}>{activity.description}</p>
                        </div>
                        <img
                            className={styles.img}
                            src={activity.image}
                            alt=""
                        />
                        <button className={styles.b1}>Læs mere</button>
                    </div>
                ))
            ) : (
                <p>No stays available</p>
            )}
        </div>
    );
};

export default Activities;
