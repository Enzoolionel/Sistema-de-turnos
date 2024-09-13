import Calendario from "./components/calendario/calendario";
import "./app.css";

const App = () => {
  return (
    <div>
      <h2 className="app-title">Sistema de turnos 📌</h2>
      {<Calendario />}
    </div>
  );
};

export default App;
