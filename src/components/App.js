import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchItem, setSearchItem] = useState("")
  return (
    <div className="app">
      <Header searchItem={searchItem} setSearchItem={setSearchItem}/>
      <ListingsContainer searchItem={searchItem} />
    </div>
  );
}

export default App;
