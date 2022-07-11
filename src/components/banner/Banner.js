import detailsData from '../details-section/detailsData';

export default function Banner({ title }) {
  let image = '';

  detailsData.filter(obj => {
    let banner = obj.src.banner;
    obj.title === title && (image = banner);
  });

  return <img src={image} alt="" className="image image--banner" />;
}
