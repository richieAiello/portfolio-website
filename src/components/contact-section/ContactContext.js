import Context from '../shared/Context';
import IconLink from '../shared/IconLink';

const ContactContext = props => {
  return (
    <Context
      mod="contact"
      heading="Get In Touch"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    >
      <div className="contact__icons">
        <IconLink mod="contact" name="github" />
        <IconLink mod="contact" name="twitter" />
        <IconLink mod="contact" name="linkedin" />
        <IconLink mod="contact" name="frontendmentor" />
      </div>
    </Context>
  );
};

export default ContactContext;
