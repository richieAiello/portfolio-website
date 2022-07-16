import GitHub from 'jsx:../../assets/icons/github.svg';
import Twitter from 'jsx:../../assets/icons/twitter.svg';
import LinkedIn from 'jsx:../../assets/icons/linkedin.svg';
import FrontEndMentor from 'jsx:../../assets/icons/frontendmentor.svg';

const linkData = [
  {
    name: 'github',
    url: 'https://github.com/richieAiello',
    svg: <GitHub className="icon" />,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/richieAiello',
    svg: <Twitter className="icon" />,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/richard-aiello-574637245/',
    svg: <LinkedIn className="icon" />,
  },
  {
    name: 'frontendmentor',
    url: 'https://www.frontendmentor.io/profile/richieAiello',
    svg: <FrontEndMentor className="icon" />,
  },
];

export default linkData;
