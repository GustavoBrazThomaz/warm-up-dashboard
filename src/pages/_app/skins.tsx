import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/skins")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Warm-up | Skins",
      },
    ],
  }),
});

function RouteComponent() {
  return <div>Hello "/_app/skins"!</div>;
}
