import * as React from "react";
import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import { AppBar } from "@/components/ui/app-bar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <HeadContent />
      <AppBar />
      <Outlet />
    </React.Fragment>
  );
}
