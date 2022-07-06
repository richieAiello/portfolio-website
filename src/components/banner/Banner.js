import data from "../details-section/data";

export default function Banner({ title }) {
  let image = "";

  data.filter((obj) => {
    let banner = obj.src.banner;
    obj.title === title && (image = banner);
  });

  return <img src={image} alt="" className="image image--banner" />;
}
