import Header from "./Layout/Header/Header";
import Main from "./Pages/Main";
import './App.scss'
import { Footer } from "./Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
