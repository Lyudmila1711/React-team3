import React, {createContext} from "react";

const DataContext = React.createContext({
    searchedItem: '',
    setSearchedItem: () => {},
}

)

export default DataContext;