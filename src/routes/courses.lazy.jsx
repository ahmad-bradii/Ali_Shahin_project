import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/courses")({
  component: Course,
});

function Course() {
  return (
    <>
      <h1>H1 here </h1>
      <Link to="/course/courseDetails">Course Detail</Link>
    </>
  );
}
