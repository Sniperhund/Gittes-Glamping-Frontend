import { createFileRoute } from "@tanstack/react-router";

const Home = () => {
    return <>
        <p>Hej</p>
    </>
}

export const Route = createFileRoute("/")({
    component: Home,
})
