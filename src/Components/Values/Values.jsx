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

import WindFarm from "../../Pictures/desktop_wind-farms.jpg";
import WindFarm2x from "../../Pictures/desktop_wind-farms@2x.jpg";
import WindFarmWebp from "../../Pictures/desktop_wind-farms.webp";

import WindFarmWebp2x from "../../Pictures/desktop_wind-farms@2x.webp";
// import WindFarmMobile2x from "../../Pictures/mobile_wind-farms@2x.jpg";
// import WindFarmMobile from "../../Pictures/mobile_wind-farms.jpg";
import WindFarmTablet from "../../Pictures/tablet_wind-farms.jpg";
import WindFarmTablet2x from "../../Pictures/tablet_wind-farms@2x.jpg";
import Solarpanel from "../../Pictures/desktop_solar-panels.jpg";
import Solarpanel2x from "../../Pictures/desktop_solar-panels@2x.jpg";
import SolarpanelWebp from "../../Pictures/desktop_solar-panels.webp";
import SolarpanelWebp2x from "../../Pictures/desktop_solar-panels@2x.webp";
import SolarpanelTablet from "../../Pictures/tablet_solar-panels.jpg";
import SolarpanelTablet2x from "../../Pictures/tablet_solar-panels@2x.jpg";
// import SolarpanelMobile from "../../Pictures/mobile_solar-panels.jpg";
// import SolarpanelMobile2x from "../../Pictures/mobile_solar-panels@2x.jpg";
import { Element } from "react-scroll";
const Values = () => {
  return (
    <Element name="about">
      <SectionContainer>
        <DescriptionContainer>
          <ValuesTitle>Main values of our company</ValuesTitle>
          <ValuesDescription>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
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
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${SolarpanelWebp}, ${SolarpanelWebp2x} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1280px)"
                srcSet={`${WindFarm}, ${WindFarm2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${WindFarmTablet}, ${WindFarmTablet2x} 2x`}
              />
              <img
                src={WindFarm}
                srcSet={`${WindFarmTablet}, ${WindFarmTablet2x} 2x`}
                alt="farmers with find farm"
                loading="lazy"
              />
            </picture>
          </Picture>
          <Picture>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${WindFarmWebp}, ${WindFarmWebp2x} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1280px)"
                srcSet={`${Solarpanel}, ${Solarpanel2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${SolarpanelTablet}, ${SolarpanelTablet2x} 2x`}
              />
              <img
                src={Solarpanel}
                srcSet={`${SolarpanelTablet}, ${SolarpanelTablet2x} 2x`}
                alt="Man-worker goes near solar panels"
                sizes="(max-width: 767px) 320px, (min-width: 768px) 768px, (min-width: 1280px) 1280px"
              />
            </picture>
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
    </Element>
  );
};

export default Values;
