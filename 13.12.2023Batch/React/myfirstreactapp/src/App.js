import PlayerName from "./Components/Child";

const App = () => {
  const loc = "Maharastra";
  const runs=20
  return (
    <div>
      <h1>App component</h1>
      <PlayerName myLoc={loc} r={runs} />
    </div>
  );
};

export default App;

