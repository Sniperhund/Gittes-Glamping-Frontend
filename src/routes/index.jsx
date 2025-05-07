import { createFileRoute } from "@tanstack/react-router";
import test from "../assets/image_00.jpg"

const Home = () => {
    return <section className="hero">
        <img src={test} alt="" />
    </section>
}

export const Route = createFileRoute("/")({
    component: Home,
})
