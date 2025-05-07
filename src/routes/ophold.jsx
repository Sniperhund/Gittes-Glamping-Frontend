import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ophold")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/ophold"!</div>;
}
