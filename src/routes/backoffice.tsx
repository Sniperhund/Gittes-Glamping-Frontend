import { ActivitiesTable } from '@/components/backoffice/activites.table'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { createFileRoute } from '@tanstack/react-router'
import { Toaster } from '@/components/ui/sonner'


function Backoffice() {
    return <main className="pt-30 p-12" style={{ fontSize: "160%" }}>
        <section className="grid grid-cols-4">
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


