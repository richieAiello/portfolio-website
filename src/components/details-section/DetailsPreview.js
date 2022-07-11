import detailsData from './detailsData';

export default function DetailsPreview({ title }) {
  let currentObj = {};

  detailsData.filter(obj => {
    obj.title === title && (currentObj = obj);
  });

  const tablet = currentObj.src.preview.tablet;
  const mobile = currentObj.src.preview.mobile;
  const heading = currentObj.heading;

  return (
    <div className="preview">
      <img
        src={tablet}
        alt={`Static preview of the ${heading} website on dessktop.`}
        className="image image--preview"
      />
      <img
        src={mobile}
        alt={`Static preview of the ${heading} website on mobile.`}
        className="image image--preview"
      />
    </div>
  );
}
