import imageData from "./imageData";

export default function ProjectImage(props) {
  let image = "";

  imageData.filter((obj) => {
    obj.title === props.title ? (image = obj.src) : "";
  });

  return <img src={image} alt="" className="image image--project" />;
}
