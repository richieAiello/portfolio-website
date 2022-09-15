import IconLink from '../shared-components/IconLink';
import email from '../../assets/icons/email.svg';
import discord from '../../assets/icons/discord.svg';

const ContactInfo = props => {
  return (
    <section className="main__context contact__context">
      <h1 className="contact__heading heading--secondary">
        Get In Touch
      </h1>
      <p className="contact__text">
        I live on Long Island, New York. Currently, I am seeking
        remote work as a front-end web developer, preferably a
        full-time position. I am remaining open to other opportunities
        as well. I consider myself a dedicated, resilient, and
        positive individual who is comfortable communicating, working
        as part of a team, and learning new skills. I'd love to hear
        about your company, what you are working on, and how I could
        help. Please send me an email using the provided link or
        address, and check out any of my profiles.
      </p>
      <a
        href="mailto: richard.a.aiello@gmail.com"
        target="_blank"
        className="btn btn--contact btn--white link"
      >
        Email Me
      </a>
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
    </section>
  );
};

export default ContactInfo;
