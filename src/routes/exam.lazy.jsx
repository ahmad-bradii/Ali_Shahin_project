import { createLazyFileRoute } from "@tanstack/react-router";
import Exam from "../Exam";

export const Route = createLazyFileRoute("/exam")({
  component: ExamRoot,
});

function ExamRoot() {
  return <Exam />;
}
