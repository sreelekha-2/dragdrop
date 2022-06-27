
import './App.css';

import {DndProvider} from "react-dnd"

import {HTML5Backend} from "react-dnd-html5-backend"
import DrogDrop from './components/DrogDrop';

function App() {
  return (

    <DndProvider backend={HTML5Backend}>
      <div className="App">
          <DrogDrop/>
      </div>
    </DndProvider>
    
  );
}

export default App;
