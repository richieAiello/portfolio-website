import ContactContext from '../components/contact-section/ContactContext';
import ContactEmail from '../components/contact-section/ContactEmail';

export default function Contact(props) {
  return (
    <main className="main main--contact container">
      <ContactContext />
      <ContactEmail />
    </main>
  );
}
