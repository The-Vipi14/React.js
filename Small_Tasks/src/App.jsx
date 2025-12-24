import {ToastContainer} from 'react-toastify'

import AuthApp from "./auth_localstorage/AuthApp";
import ContextApp from "./LoginCheck_src/ContactApp";
import MusicApp from "./musicPlayer/MusicApp";

const App = () => {
  return (
    <>
      {/* <ContextApp /> */}
      {/* <MusicApp/> */}
      <ToastContainer position='top-right' autoClose={500} />
      <AuthApp/>
    </>
  );
};

export default App;
