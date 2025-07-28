import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ServerCard } from "@/components/ui/server-card";
import { createFileRoute } from "@tanstack/react-router";

export const IndexRoute = createFileRoute("/_app/")({
  component: RouteComponent,
});

export const Route = createFileRoute("/_app/servidores")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Card>
        <div className="flex gap-4 px-8">
          <Input className="w-full" placeholder="Procurar servidores..." />
          <Button>Buscar</Button>
        </div>
      </Card>

      <div className="space-y-4 mt-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <ServerCard key={index} />
        ))}
      </div>
    </div>
  );
}
