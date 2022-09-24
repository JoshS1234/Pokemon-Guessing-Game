import "./App.css";
import Header from "./components/Header";
import PokemonNameProvider from "./components/PokemonNameProvider.jsx";

function App() {
  return (
    <section>
      <Header />
      <PokemonNameProvider />
    </section>
  );
}

export default App;
