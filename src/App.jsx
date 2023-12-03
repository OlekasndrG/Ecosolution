import { MainContainer } from "./App.styled";
import Cases from "./Components/Cases/Cases";
import Electricity from "./Components/Electricity/Electricity";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Values from "./Components/Values/Values";

function App() {
  return (
    <MainContainer>
      <Header />
      <Main />
      <Values />
      <Electricity />
      <Cases />
    </MainContainer>
  );
}

export default App;
