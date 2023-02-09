import { MainRoutes } from "./routes/MainRoutes"
import {Home} from "./pages/Home";
import styled from "styled-components";

const Conteiner = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <Conteiner>
      <h1>Galeria de fotos</h1>
      <hr />
      <MainRoutes/>
    </Conteiner>
    
    
  )
}
export default App;