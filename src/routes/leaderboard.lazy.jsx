import { createLazyFileRoute } from "@tanstack/react-router";
import Leaderboard from "../Leaderboard";
export const Route = createLazyFileRoute("/leaderboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Leaderboard />;
}
