import { MainContainer } from "./App.styled";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Values from "./Components/Values/Values";

function App() {
  return (
    <MainContainer>
      <Header />
      <Main />
      <Values />
      <div>
        <p>aaa</p>
        <h2>ZZZZZ</h2>
      </div>
    </MainContainer>
  );
}

export default App;
