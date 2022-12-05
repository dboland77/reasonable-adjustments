import {Dropdown} from "."
import {initialState} from "./store/store"

export const App = ()=> {
  return (
    <div className="App">
        Hello
      <Dropdown disabilitylist={initialState.disabilitylist}/>
    </div>
  );
}

