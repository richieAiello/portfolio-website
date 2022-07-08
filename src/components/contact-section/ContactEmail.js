import Email from 'jsx:../../assets/icons/email.svg';

const ContactEmail = props => {
  return (
    <address className="contact__email">
      <a
        href="mailto: richard.a.aiello@gmail.com"
        target="_blank"
        className="contact__link link"
      >
        <Email className="contact__email--icon" />
        richard.a.aiello@gmail.com
      </a>
    </address>
  );
};

export default ContactEmail;
