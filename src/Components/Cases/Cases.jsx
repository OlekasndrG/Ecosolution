import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwipeRight from "../../Pictures/icons/arrow_Swipe_Right.svg?react";
import SwipeLeft from "../../Pictures/icons/arrow_Swipe_Left.svg?react";
import data from "../../data/cases.json";
import { Element } from "react-scroll";
import {
  Container,
  Head,
  Title,
  PaginationContainer,
  Buttons,
  Button,
} from "./Cases.styled";
import Slide from "./Slide/Slide";

const Cases = () => {
  const totalSlides = 5;

  const formattedPage = (num) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <Element name="cases">
      <Container>
        <Head>
          <Title>Successful cases of our company</Title>
          <PaginationContainer>
            <div className="swiper-pagination"></div>
            <Buttons>
              <Button type="button" className="prev">
                <SwipeLeft />
              </Button>
              <Button type="button" className="next">
                <SwipeRight />
              </Button>
            </Buttons>
          </PaginationContainer>
        </Head>
        <Swiper
          direction="horizontal"
          loop={true}
          mousewheel={true}
          css-mode="true"
          modules={[Mousewheel, Pagination, Navigation]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          pagination={{
            type: "fraction",
            el: ".swiper-pagination",
            formatFractionTotal: () => formattedPage(totalSlides),
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              pagination: {
                formatFractionCurrent: (number) => formattedPage(number),
              },
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
              pagination: {
                formatFractionCurrent: (number) => formattedPage(number + 1),
              },
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 48,
              pagination: {
                formatFractionCurrent: (number) =>
                  formattedPage(number < totalSlides ? number + 1 : 1),
              },
            },
          }}
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Slide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Element>
  );
};

export default Cases;
