import {
  DescriptionContainer,
  SectionContainer,
  ValuesTitle,
  ValuesDescription,
  ValuesContainer,
  Item,
  Picture,
  TitleContainer,
  TextContainer,
  Title,
} from "./Values.styled";
import CPU from "../../Pictures/icons/cpu_Charge.svg?react";
import Global from "../../Pictures/icons/global_Edit.svg?react";
import Circle from "../../Pictures/icons/maximize_Circle.svg?react";
import Ranking from "../../Pictures/icons/ranking.svg?react";
import SolarMan from "../../Pictures/man_worker_firld_by_solar_panels.jpg";
import WindFarm from "../../Pictures/wind_farms_fields.jpg";
const Values = () => {
  return (
    <SectionContainer>
      <DescriptionContainer>
        <ValuesTitle>Main values of our company</ValuesTitle>
        <ValuesDescription>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world`s energy needs.
        </ValuesDescription>
      </DescriptionContainer>
      <ValuesContainer>
        <Item>
          <TitleContainer>
            <Circle />
            <Title>Openness</Title>
          </TitleContainer>
          <TextContainer>
            <p>to the world, people, new ideas and projects</p>
          </TextContainer>
        </Item>

        <Item>
          <TitleContainer>
            <Global />
            <Title>Responsibility</Title>
          </TitleContainer>
          <TextContainer>
            <p>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </TextContainer>
        </Item>
        <Picture>
          <img src={WindFarm} alt="men on wind farm " />
        </Picture>
        <Picture>
          <img src={SolarMan} alt="man worker on field by solar panels" />
        </Picture>

        <Item>
          <TitleContainer>
            <CPU />
            <Title>Innovation</Title>
          </TitleContainer>
          <TextContainer>
            <p>
              we use the latest technology to implement non-standard solutions
            </p>
          </TextContainer>
        </Item>

        <Item>
          <TitleContainer>
            <Ranking />
            <Title>Quality</Title>
          </TitleContainer>
          <TextContainer>
            <p>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </TextContainer>
        </Item>
      </ValuesContainer>
    </SectionContainer>
  );
};

export default Values;
