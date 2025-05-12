import { createFileRoute } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"

function Backoffice() {
    return <>
        <section className="grid grid-cols-4">
            <Button></Button>
        </section>
    </>
}

export const Route = createFileRoute('/backoffice')({
    component: Backoffice,
})


