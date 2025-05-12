import { createFileRoute } from '@tanstack/react-router'

function BackofficeReviews() {
    return <div>Hello "/backoffice/reviews"!</div>
}

export const Route = createFileRoute('/backoffice/reviews')({
    component: BackofficeReviews,
})


