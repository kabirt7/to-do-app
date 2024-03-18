import "./App.css";
import TodoContextProvider from "./context/TodoContextProvider";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <TodoContextProvider>
        <Home />
      </TodoContextProvider>
    </>
  );
}

export default App;
