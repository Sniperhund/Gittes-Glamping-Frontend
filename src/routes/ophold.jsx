import { createFileRoute } from "@tanstack/react-router";
import { Stay } from "../components/stay/Stay";

export const Route = createFileRoute("/ophold")({
    component: RouteComponent,
});

function RouteComponent() {
    return Stay();
}
