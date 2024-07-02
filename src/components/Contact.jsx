import Input from '../common/Input';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <Input
          label="Name"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
        <Input
          label="Email"
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <Input
          label="Message"
          textArea
          name="message"
          id="message"
          placeholder="Message"
          required
        />
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
