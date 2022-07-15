import Context from '../shared/Context';
import IconLink from '../shared/IconLink';
import email from '../../assets/icons/email.svg';
import discord from '../../assets/icons/discord.svg';

const ContactContext = props => {
  return (
    <Context
      mod="contact"
      heading="Get In Touch"
      text={`
        I am based in Long Island, New York, and currently seeking remote work as a junior front-end web developer, preferably
        a full-time position, but I am open to other opportunites as well. I consider myself
        a dedicated, resilient, and positive individual, who is comfortable communicating, 
        working as part of a team, and learning new skills. I'd love to hear about your company,
        what you are working on, and how I could help. Please feel free to send me an email using
        the provided link or address, and checkout any of my profiles.
      `}
      link
      path="mailto: richard.a.aiello@gmail.com"
      linkText="Email Me"
    >
      <div className="contact__icons">
        <IconLink mod="contact" name="github" />
        <IconLink mod="contact" name="twitter" />
        <IconLink mod="contact" name="linkedin" />
        <IconLink mod="contact" name="frontendmentor" />
      </div>
      <address className="contact__address">
        <img src={email} alt="" className="image" /> :
        <span className="contact__span">
          richard.a.aiello@gmail.com
        </span>
      </address>
      <address className="contact__address">
        <img src={discord} alt="" className="image" /> :
        <span className="contact__span">richieAiello#3097</span>
      </address>
    </Context>
  );
};

export default ContactContext;
