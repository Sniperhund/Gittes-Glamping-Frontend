import { createFileRoute } from "@tanstack/react-router"

function Backoffice() {
    return <>Backoffice</>
}

export const Route = createFileRoute("/")({
    component: Backoffice,
})
