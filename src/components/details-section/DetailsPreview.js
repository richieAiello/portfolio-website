import data from "./data";

export default function DetailsPreview({ title }) {
  let currentObj = {};

  data.filter((obj) => {
    obj.title === title && (currentObj = obj);
  });

  const desktop = currentObj?.src.preview.desktop;
  const mobile = currentObj?.src.preview.mobile;
  const heading = currentObj?.heading;

  return (
    <section className="preview">
      <h3 className="preview__heading heading--secondary">Static Preview</h3>
      <img
        src={desktop}
        alt={`Static preview of the ${heading} website on dessktop.`}
        className="image image--preview"
      />
      <img
        src={mobile}
        alt={`Static preview of the ${heading} website on mobile.`}
        className="image image--preview"
      />
    </section>
  );
}
