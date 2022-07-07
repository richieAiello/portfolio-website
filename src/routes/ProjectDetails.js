import { Outlet } from "react-router-dom";
import Carousel from "../components/carousel-section/Carousel";
import Collaboration from "../components/collaboration-section/Collaboration";

export default function Details(props) {
  return (
    <main className="main main--details container">
      <Outlet />
      <Carousel />
      <Collaboration />
    </main>
  );
}
