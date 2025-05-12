import { ActivitiesTable } from '@/components/backoffice/activities.table'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { createFileRoute } from '@tanstack/react-router'
import { Toaster } from '@/components/ui/sonner'


function Backoffice() {
    return <main className="pt-30 p-12" style={{ fontSize: "160%" }}>
        <section className="w-full grid grid-cols-2 grid-rows-2 gap-6">
            <ActivitiesTable />
            <ActivitiesTable />
            <ActivitiesTable />
            <ActivitiesTable />
        </section>
    </main>
}

export const Route = createFileRoute('/backoffice')({
    component: () => <ThemeProvider defaultTheme="dark">
        <Backoffice />
        <Toaster />
    </ThemeProvider>,
})


