import { createLazyFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
export const Route = createLazyFileRoute("/")({
  component: index,
});

function index() {
  return (
    //header
    <>
      <h2>test</h2>
      <Link to="/courses">My Course</Link>
    </>
  );
}
