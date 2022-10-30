import './App.css';
import { StateDemo } from './Component/StateDemo';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage  from './homepage';
import Formhandling from './formhandling/formhandling';
import Student from './jsonAssignment.js';
import Dogs from "./APIFetch"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="statedemo" element={<StateDemo/>}/>
          <Route path="formhandling" element={<Formhandling/>}></Route>
          <Route path='student' element={<Student/>}></Route>
          <Route path="apifetch" element={<Dogs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
