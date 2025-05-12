import { Nav } from "../components/Nav";
import Activities from "../components/Aktiviteter/Activities";
import ActivitiesHeader from "../components/ActivitiesHeader/ActivitiesHeader";
import { createFileRoute } from "@tanstack/react-router";

import React from "react";

function Aktiviteter() {
    return (
        <div>
            <Nav />
            <ActivitiesHeader />
            <Activities />
        </div>
    );
}

export const Route = createFileRoute("/aktiviteter")({
    component: Aktiviteter,

});
