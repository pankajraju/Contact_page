import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("pankaj");
  const [email, setEmail] = useState("pankaj");
  const [text, setText] = useState("pankaj");

  const onViaCallSubmit = () => {
    console.log("i am on call");
  };
  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
          <Button
            text="VIEW SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button isOutline={false} text="Submit" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/service.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
