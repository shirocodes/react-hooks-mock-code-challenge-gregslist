import React from "react";
import Search from "./Search";

function Header({searchItem, setSearchItem}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchItem={searchItem} setSearchItem={setSearchItem}/>
    </header>
  );
}

export default Header;
