import { useRef, useEffect } from "react";
import {
  Container,
  Head,
  Title,
  Pagination,
  Buttons,
  Button,
} from "./Cases.styled";

import SwipeRight from "../../Pictures/icons/arrow_Swipe_Right.svg?react";
import SwipeLeft from "../../Pictures/icons/arrow_Swipe_Left.svg?react";
import data from "../../data/cases.json";

import { register } from "swiper/element/bundle";
import Slide from "./Slide/Slide";
import { Element } from "react-scroll";

const Cases = () => {
  const swiperRef = useRef(null);
  const totalSlides = 5;

  const formattedPage = (num) => {
    return num.toString().padStart(2, "0");
  };

  useEffect(() => {
    // if (swiperRef.current) {
    //   console.log("Sds");
    // }
    const swiperContainer = swiperRef.current;
    register();
    const params = {
      loop: true,
      mousewheel: true,
      noSwiping: false,
      direction: "horizontal",
      navigation: {
        enabled: true,
        nextEl: ".next",
        prevEl: ".prev",
      },
      pagination: {
        type: "fraction",
        el: ".swiper-pagination",
        formatFractionTotal: () => {
          return formattedPage(totalSlides);
        },
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          pagination: {
            formatFractionCurrent: (number) => {
              return formattedPage(number);
            },
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
          pagination: {
            formatFractionCurrent: (number) => {
              if (number < totalSlides) {
                return formattedPage(number + 1);
              } else if (number === totalSlides) {
                return formattedPage(1);
              } else {
                return formattedPage(number);
              }
            },
          },
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 48,
          pagination: {
            formatFractionCurrent: (number) => {
              if (number < totalSlides) {
                return formattedPage(number + 1);
              } else if (number === totalSlides) {
                return formattedPage(1);
              } else {
                return formattedPage(number);
              }
            },
          },
        },
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <Element name="cases">
      <Container>
        <Head>
          <Title>Successful cases of our company</Title>
          <Pagination>
            <div className="swiper-pagination"></div>
            <Buttons>
              <Button type="button" className="prev">
                <SwipeLeft />
              </Button>
              <Button type="button" className="next">
                <SwipeRight />
              </Button>
            </Buttons>
          </Pagination>
        </Head>
        <swiper-container
          ref={swiperRef}
          init="false"
          speed="500"
          css-mode="true"
          mousewheel={true}
          noSwiping={false}
        >
          {data.map((slide) => {
            return (
              <swiper-slide key={slide.id}>
                <Slide slide={slide} />
              </swiper-slide>
            );
          })}
        </swiper-container>
      </Container>
    </Element>
  );
};

export default Cases;
