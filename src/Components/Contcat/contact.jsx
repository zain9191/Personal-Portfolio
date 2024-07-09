// src/Components/Contcat/contact.jsx
import React, { useContext } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { LanguageContext } from "../../Context/LanguageContext";

const Contact = () => {
  const { language, translations } = useContext(LanguageContext);
  const [state, handleSubmit] = useForm("xkndyvnb");

  if (state.succeeded) {
    return <p>{translations[language].contact.thanks}</p>;
  }

  return (
    <section id="contact">
      <div className="container">
        <h2>{translations[language].contact.contactMe}</h2>
        <p>{translations[language].contact.feelFree}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{translations[language].contact.name}</label>
            <input type="text" id="name" name="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              {translations[language].contact.email}
            </label>
            <input type="email" id="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              {translations[language].contact.message}
            </label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            {translations[language].contact.send}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
