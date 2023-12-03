import {
  Section,
  Title,
  Container,
  Contacts,
  Contact,
  Tel,
  Address,
  SocialHolder,
} from "./Contact_Us.styled";
import { Element } from "react-scroll";
import Phone from "../../Pictures/icons/phone.svg?react";
import Mail from "../../Pictures/icons/mail.svg?react";
import Map from "../../Pictures/icons/map.svg?react";
import Socials from "../Socials/Socials";
import ContactsForm from "./Contact_Form/Contact_Form";

const Contact_Us = () => {
  return (
    <Element name="contact_Us">
      <Section>
        <Title>Contact us</Title>
        <Container>
          <Contacts>
            <Contact>
              <p>Phone:</p>
              <Tel href="tel:+38 (098) 12 34 567">
                <Phone /> 38 (098) 12 34 567
              </Tel>
              <a href="tel:+38 (093) 12 34 567">
                <Phone /> 38 (093) 12 34 567
              </a>
            </Contact>
            <Contact>
              <p>E-mail:</p>
              <a>
                <Mail />
                office@ecosolution.com
              </a>
            </Contact>
            <Contact>
              <p>Address:</p>
              <a
                href="https://maps.app.goo.gl/DnwdvcWFrQnHx5gZ6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Map />
                <Address>
                  79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </Address>
              </a>
            </Contact>
            <Contact>
              <p>Social Networks:</p>
              <SocialHolder>
                <Socials />
              </SocialHolder>
            </Contact>
          </Contacts>
          <ContactsForm />
        </Container>
      </Section>
    </Element>
  );
};

export default Contact_Us;
