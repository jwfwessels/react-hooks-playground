import React from "react";
import { FOO_DATA } from "../fake-api";
let FooContext;
const { Provider, Consumer } = (FooContext = React.createContext());
// Context.Provider, Context.Consumer

class FooContextProvider extends React.Component {
  state = {
    items: FOO_DATA
  };

  deleteThisFoo = id => {
    console.log({ id });
    this.setState({ items: this.state.items.filter(item => item.id !== id) });
  };

  addAnotherFoo(foo) {
    this.setState({
      items: [
        ...this.state.items,
        { id: foo.id ? foo.id : Math.random() * 1000, ...foo }
      ]
    });
  }
  render() {
    console.log({ items2: this.state.items });
    return (
      <Provider
        value={{
          items: this.state.items,
          deleteItem: this.deleteThisFoo,
          addItem: this.addAnotherFoo
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { FooContextProvider, Consumer as FooConsumer, FooContext };
