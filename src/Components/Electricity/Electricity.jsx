import { useState, useEffect } from "react";

import { Container, Title, Border, Counter } from "./Electricity.styled";

const Electricity = () => {
  const [counter, setCounter] = useState(1134147814);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);
    return () => clearInterval(counterInterval);
  }, []);

  const formattedNumber = new Intl.NumberFormat("en-US").format(counter);
  const numberWithDots = formattedNumber.replace(/,/g, ".");

  return (
    <Container>
      <Title>Electricity we produced for all time</Title>
      <Border></Border>
      <Counter>
        <h4>{numberWithDots}</h4>
        <p>kWh</p>
      </Counter>
    </Container>
  );
};

export default Electricity;
