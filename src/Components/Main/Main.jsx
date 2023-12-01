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
const Main = () => {
  return (
    <MainContainer>
      <Container>
        <Title>RENEWABLE ENERGY For any task</Title>
        <DescriptionContainer>
          <Description>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </Description>
          <LearnMoreLink href="#cases">
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
  );
};
export default Main;