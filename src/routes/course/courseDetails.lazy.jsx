import { createLazyFileRoute } from "@tanstack/react-router";
import CoursePage from "../../CoursePage";
export const Route = createLazyFileRoute("/course/courseDetails")({
  component: CoursePageDetails,
});

function CoursePageDetails() {
  return (
    <div className="CoursePage-Container">
      <h1>Starting SEO as your Home</h1>
      <CoursePage />
    </div>
  );
}
