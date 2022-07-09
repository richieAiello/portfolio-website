import Context from '../shared/Context';
import data from './data';

export default function DetailsContext({ title, text, processText }) {
  let currentObj = {};

  data.filter(obj => {
    obj.title === title && (currentObj = obj);
  });

  return (
    <Context
      mod="details"
      heading={currentObj.heading}
      text={text}
      process={true}
      processText={processText}
      link={true}
      path={currentObj.url}
      linkText="Visit Website"
    />
  );
}
