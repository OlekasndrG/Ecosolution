import { scrollSpy } from "react-scroll";
import { MainContainer } from "./App.styled";
import Cases from "./Components/Cases/Cases";
import Contact_Us from "./Components/Contact_Us/Contact_Us";
import Electricity from "./Components/Electricity/Electricity";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Values from "./Components/Values/Values";
import Questions from "./Components/FAQ/FAQ";

function App() {
  scrollSpy.update();
  return (
    <>
      <MainContainer>
        <Header />
      </MainContainer>
      <MainContainer>
        <Main />
        <Values />
        <Electricity />
        <Cases />
        <Questions />
        <Contact_Us />
      </MainContainer>
      <MainContainer>
        <Footer />
      </MainContainer>
    </>
  );
}

export default App;
