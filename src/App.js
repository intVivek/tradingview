import "./App.css";
import { AdvancedChart } from "react-tradingview-embed";

function App() {
  return (
    <div className="App">
      <AdvancedChart
        widgetConfig={{
          interval: "1D",
          colorTheme: "dark",
          width: "100%",
          symbol: "USD",
        }}
      />
    </div>
  );
}

export default App;
