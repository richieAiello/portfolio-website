import audiophile from '../../assets/portfolio/audiophile.webp';
import photosnap from '../../assets/portfolio/photosnap.webp';
import countries from '../../assets/portfolio/countries.webp';
import myteam from '../../assets/portfolio/myteam.webp';
import archstudio from '../../assets/portfolio/archstudio.webp';
import designo from '../../assets/portfolio/designo.webp';

const data = [
  {
    id: 1,
    heading: 'audiophile',
    site: 'https://audiophile-ecommerce-richieaiello.netlify.app/',
    repo: 'https://github.com/richieAiello/audiophile-website',
    image: audiophile,
    text: 'E-commerce site built with React, utlizing context and useReducer to manage shopping cart state. Stores and retrieves data using local storage.',
  },
  {
    id: 2,
    heading: 'Photosnap',
    site: 'https://photosnap-website-richieaiello.netlify.app/',
    repo: 'https://github.com/richieAiello/photosnap-website',
    image: photosnap,
    text: '4-page website built with React. Contains a gallery of interactive story slides. An accessible table element compares features of pricing plans. ',
  },
  {
    id: 3,
    heading: 'REST Countries',
    site: 'https://countries-richieaiello.netlify.app/',
    repo: 'https://github.com/richieAiello/countries-api-website',
    image: countries,
    text: "Retrieves and renders data from the REST countries API. Implements Tailwind's dark mode feature to toggle between light and dark styling.",
  },
  {
    id: 4,
    heading: 'MyTeam',
    site: 'https://myteam-richieaiello.netlify.app/',
    repo: 'https://github.com/richieAiello/myteam-website',
    image: myteam,
    text: '3-page React website. Applys useState to toggle the display of cards on the about page. The contact form is validated and styled by Formik and Yup.',
  },
  {
    id: 5,
    heading: 'arch studio',
    site: 'https://arch-studio-richieaiello.netlify.app/',
    repo: 'https://github.com/richieAiello/arch-studio-website',
    image: archstudio,
    text: 'Leaflet.js displays interactive maps pinpointing locations of studios. The contact form is validated and styled by Formik and Yup.',
  },
  {
    id: 6,
    heading: 'designo',
    site: 'https://designo-website-richieaiello.netlify.app/',
    repo: 'https://github.com/richieAiello/designo-website',
    image: designo,
    text: '7-page website that uses functional components and SCSS with the BEM naming convention to manage and style a multi-page layout. Built with Parcel. ',
  },
];

export default data;
