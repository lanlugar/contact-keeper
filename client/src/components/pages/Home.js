import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilters from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilters />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
