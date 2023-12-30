import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <AppHeader name="Color Picker" />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
