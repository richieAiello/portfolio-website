import imageData from "./imageData";

export default function ProjectImage({ title }) {
  let image = "";

  imageData.filter((obj) => {
    obj.title === title && (image = obj.src);
  });

  return <img src={image} alt="" className="image image--project" />;
}
