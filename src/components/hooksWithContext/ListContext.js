import React from "react";
import { LIST_DATA } from "../fake-api";
let ListContext;
const { Provider, Consumer } = (ListContext = React.createContext());
// Context.Provider, Context.Consumer

class ListContextProvider extends React.Component {
  state = {
    items: LIST_DATA
  };

  deleteThisList = id => {
    console.log({ id });
    this.setState({ items: this.state.items.filter(item => item.id !== id) });
  };

  addAnotherList(item) {
    this.setState({
      items: [
        ...this.state.items,
        { id: item.id ? item.id : Math.random() * 1000, ...item }
      ]
    });
  }
  render() {
    console.log({ items2: this.state.items });
    return (
      <Provider
        value={{
          items: this.state.items,
          deleteItem: this.deleteThisList,
          addItem: this.addAnotherList
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ListContextProvider, Consumer as ListConsumer, ListContext };
