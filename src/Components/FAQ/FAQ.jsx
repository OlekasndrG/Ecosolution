import { useState } from "react";

import { Element } from "react-scroll";
import data from "../../data/faq.json";

import {
  Container,
  MobileTitle,
  Section,
  SideContainer,
  TabletTitle,
  Contact,
} from "./FAQ.styled";
import Accordion from "./Accordion/Accordion";

import Ellipse from "../../Pictures/icons/ellipse.svg?react";
import CustomLink from "../../Utils/Link/Link";
const Questions = () => {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId(openId !== id ? id : null);
  };

  return (
    <Element name="FAQ">
      <Container>
        <MobileTitle>Frequently Asked Questions</MobileTitle>
        <Section>
          {data &&
            data.map((question) => {
              return (
                <Accordion
                  key={question.id}
                  question={question}
                  handleToggle={handleToggle}
                  opened={openId === question.id}
                />
              );
            })}
        </Section>
        <SideContainer>
          <TabletTitle>Frequently Asked Questions</TabletTitle>
          <Contact>
            <p>Didn&apos;t find the answer to your question?</p>

            <CustomLink section={"contact_Us"}>
              <span>Contact Us</span>
              <Ellipse />
            </CustomLink>
          </Contact>
        </SideContainer>
      </Container>
    </Element>
  );
};

export default Questions;
