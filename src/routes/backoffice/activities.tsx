import { createFileRoute } from "@tanstack/react-router"

function BackofficeActivities() {
    return <>
        <h1>Activities</h1>


    </>
}

export const Route = createFileRoute("/backoffice/activities")({
    component: BackofficeActivities,
})
