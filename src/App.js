import "./App.css";
import Header from "./components/Header";
import PokemonNameProvider from "./components/PokemonNameProvider.jsx";
import ChooseGen from "./components/ChooseGen";

function App() {
  return (
    <section>
      <Header />
      <ChooseGen />
      <PokemonNameProvider />
    </section>
  );
}

export default App;
