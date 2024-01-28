import { useState, useEffect } from "react";

import { Container, Title, Border, Counter } from "./Electricity.styled";

const Electricity = () => {
  const [counter, setCounter] = useState(11341478141111);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);
    return () => clearInterval(counterInterval);
  }, []);

  const formattedNumber = new Intl.NumberFormat("en-US").format(counter);
  const numberWithDots = formattedNumber.replace(/,/g, ".");
  const fontSize = `${164 - 13 * (numberWithDots.length - 13)}px`;
  const paddingLeft = `${(numberWithDots.length - 15) * 22}px`;
  return (
    <Container>
      <Title>Electricity we produced for all time</Title>
      <Border></Border>
      <Counter $paddingLeft={paddingLeft} $fontSize={fontSize}>
        <h4>{numberWithDots}</h4>
        <span>kWh</span>
      </Counter>
    </Container>
  );
};

export default Electricity;
