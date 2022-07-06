import { Outlet } from "react-router-dom";
import Collaboration from "../components/collaboration-section/Collaboration";

export default function Details({children}) {
  return (
    <main className="main main--details">
      <Outlet />
      <Collaboration />
    </main>
  );
}