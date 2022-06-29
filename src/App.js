import { Provider } from "react-redux";
import store from "./redux/store";

import Board from "./board/Board";

function App() {
  return <div className="App">
    <Provider store={store}>
      <Board />
    </Provider>
  </div>;
}

export default App;
