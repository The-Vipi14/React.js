import Navbar from "./components/Navbar/Navbar";
import Concept from "./Hooks/useEffect/Concept";
import { UseRff, FormHandling ,ScrollExample} from "./Hooks/useRef/UseRff";
import Page1 from "./pages/Page1";
import UseState from "./Hooks/useState/useState";
import { UseCallback } from "./Hooks/useCallback/useCallback";
import Theme from "./SmallTasks/ThemePage/Theme";
const App = () => {
  return (
    <>
      <Navbar />
      {/* <Concept/> */}
      {/* <Page1/> */}
      {/* <ScrollExample/> */}
      {/* <FormHandling /> */}
      {/* <UseState /> */}
      {/* <UseCallback/> */}
      <Theme/>
    </>
  );
};

export default App;
