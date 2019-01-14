import React from "react";

import SearchBox from "./SearchBox";
import { navigate } from "@reach/router";

const SearchParams = () => {
  return (
    <div>
      <SearchBox search={() => navigate("/")} />
    </div>
  );
};

export default SearchParams;
