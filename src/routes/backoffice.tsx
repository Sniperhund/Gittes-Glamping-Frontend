import { createFileRoute } from "@tanstack/react-router"

function Backoffice() {
    return <>Backoffice</>
}

export const Route = createFileRoute("/backoffice")({
    component: Backoffice,
})
