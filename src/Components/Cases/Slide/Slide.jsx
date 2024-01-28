import { ImageHolder, Info, Name, Type, Text, ArrowLink } from "./Slide.styled";
import PropTypes from "prop-types";

const Slide = ({ slide }) => {
  return (
    <div>
      <ImageHolder>
        <img
          src={slide.img}
          srcSet={`${slide.img} 1x, ${slide.img2x} 2x`}
          alt={slide.name}
          loading="lazy"
        />

        {/* <img src={slide.img} alt={slide.name} /> */}
      </ImageHolder>
      <Info>
        <Name>
          <Text>
            <p>{slide.location}</p>
            <p>{slide.name}</p>
          </Text>
          <a href="#">
            <ArrowLink />
          </a>
        </Name>
        <Type>
          <p>{slide.type}</p>
          <p>{slide.date}</p>
        </Type>
      </Info>
    </div>
  );
};

export default Slide;

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
};
