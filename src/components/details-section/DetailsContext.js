import Context from '../shared/Context';
import detailsData from './detailsData';

export default function DetailsContext({ title, text, processText }) {
  let currentObj = {};

  detailsData.filter(obj => {
    obj.title === title && (currentObj = obj);
  });

  return (
    <Context
      mod="details"
      heading={currentObj.heading}
      text={text}
      process
      processText={processText}
      link
      path={currentObj.url}
      linkText="Visit Website"
      repo
      repoPath={currentObj.repo}
    />
  );
}
