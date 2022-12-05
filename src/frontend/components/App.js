import {DisabilityDropdown} from "."
import {initialState} from "./store/store"

export const App = ()=> {
  return (
    <div className="App">
        Hello
      <DisabilityDropdown disabilitylist={initialState.disabilitylist}/>
    </div>
  );
}

