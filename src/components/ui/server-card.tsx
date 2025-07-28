import { MapPin, UsersRound, Wifi } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Badge } from "./badge";

export function ServerCard() {
  return (
    <Card className="px-8">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <p>OVERPASS DEATHMATCH</p>
          <div className="flex gap-4 [&_p]:flex [&_p]:gap-2 [&_p]:text-sm [&_p]:items-center">
            <p>
              <MapPin size={16} className="text-orange-500" />
              de_overpass
            </p>
            <p>
              <UsersRound size={16} className="text-blue-500" />
              8/12
            </p>
            <p className="text-green-500">
              <Wifi size={16} />8 ms
            </p>

            <Badge variant="outline">Deathmatch</Badge>
          </div>
        </div>
        <Button
          onClick={() =>
            (window.location.href =
              "steam://rungameid/730//+connect 100.65.16.234:27015")
          }
          className="bg-orange-500 hover:bg-orange-500/80 text-white"
        >
          Conectar
        </Button>
      </div>
    </Card>
  );
}
