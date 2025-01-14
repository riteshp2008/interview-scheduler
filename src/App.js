import { Provider } from "react-redux";
import { store } from "./store/store";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Dashboard />
      </div>
    </Provider>
  );
};

export default App;
