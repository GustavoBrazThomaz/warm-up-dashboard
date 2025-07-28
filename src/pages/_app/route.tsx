import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  createFileRoute,
  Outlet,
  useLocation,
  useNavigate,
} from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const tabDefaultValue = location.pathname.split("/")[1];

  return (
    <div className="px-48 max-lg:px-16 py-8">
      <Tabs
        defaultValue={tabDefaultValue}
        onValueChange={(value) => navigate({ to: `/${value}` })}
      >
        <TabsList className="w-full">
          <TabsTrigger value="perfil">Perfil</TabsTrigger>
          <TabsTrigger value="servidores">Servidores</TabsTrigger>
          <TabsTrigger value="skins">Skins</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="py-8">
        <Outlet />
      </div>
    </div>
  );
}
