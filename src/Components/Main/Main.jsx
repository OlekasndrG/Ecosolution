import {
  LearnMoreLink,
  MainContainer,
  Title,
  DescriptionContainer,
  Description,
  Container,
  ContactsItem,
  Contacts,
  Image,
} from "./Main.styled";
import Arrow from "../../Pictures/icons/arrow_Right.svg?react";
import image from "../../Pictures/wind_turbine_clean_energy.jpg";
import { Element } from "react-scroll";
const Main = () => {
  return (
    <Element name="main">
      <MainContainer>
        <Container>
          <Title>RENEWABLE ENERGY For any task</Title>
          <DescriptionContainer>
            <Description>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </Description>

            <LearnMoreLink
              to="cases"
              smooth={true}
              duration={500}
              offset={-150}
            >
              <span>Learn More</span>
              <Arrow />
            </LearnMoreLink>
          </DescriptionContainer>
        </Container>
        <Contacts>
          <ContactsItem>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </ContactsItem>
          <ContactsItem>office@ecosolution.com</ContactsItem>
          <ContactsItem>ecosolution © 2023</ContactsItem>
        </Contacts>
        <Image src={image} alt="wind turbine cean energy" />
      </MainContainer>
    </Element>
  );
};
export default Main;
