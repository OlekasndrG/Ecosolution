import { scrollSpy } from "react-scroll";
import { MainContainer } from "./App.styled";
import Cases from "./Components/Cases/Cases";
import Contact_Us from "./Components/Contact_Us/Contact_Us";
import Electricity from "./Components/Electricity/Electricity";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Values from "./Components/Values/Values";

function App() {
  scrollSpy.update();
  return (
    <MainContainer>
      <Header />
      <Main />
      <Values />
      <Electricity />
      <Cases />
      <Contact_Us />
      <Footer />
    </MainContainer>
  );
}

export default App;
