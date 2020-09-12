import React from "react";

import Header from "../../components/Header";
import Content from "../../components/Content";
import ContactForm from "../../components/ContactForm";

function ContactPage(props) {
  return (
    <div className="mainContent">
      <Header title={props.title} />
      <Content>
        <ContactForm />
      </Content>
    </div>
  );
}

export default ContactPage;
