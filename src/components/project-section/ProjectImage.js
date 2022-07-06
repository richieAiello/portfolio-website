import imageData from "./imageData";

export default function ProjectImage(props) {

  let image = "";

  imageData.filter(object => {
    object.title === props.title ? image = object.src : "";
  })

  return (
    <img src={image} alt="" className="image image--project"/>
  );
}
