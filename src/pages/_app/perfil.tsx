import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/perfil")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Warm-up | Perfil",
      },
    ],
  }),
});

function RouteComponent() {
  return <div>Hello "/_app/perfil"!</div>;
}
