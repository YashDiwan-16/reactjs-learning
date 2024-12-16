import Appname from "./components/Appname";
import { Grid } from "./components/Grid";
import "./App.css";
function App() {
  return (
    <>
      <Appname></Appname>
      <div className="container-item">
        <Grid></Grid>
      </div>
    </>
  );
}

export default App;
