import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
  beforeLoad: async () => {
    throw redirect({
      to: "/servidores",
      replace: true,
    });
  },
});

function RouteComponent() {
  return null;
}
