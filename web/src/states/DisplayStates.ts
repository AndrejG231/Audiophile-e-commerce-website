import { Container } from "unstated";

type StateProps = {
  navbar: boolean;
  shoppingCart: boolean;
};

const defaultState = { navbar: false, shoppingCart: false };

class DisplayStates extends Container<StateProps> {
  state = defaultState;
  toggleNavbar = () =>
    this.setState(({ navbar }) => ({
      navbar: !navbar,
      shoppingCart: false,
    }));
  toggleCart = () =>
    this.setState(({ shoppingCart }) => ({
      shoppingCart: !shoppingCart,
      navbar: false,
    }));
  closeAll = () => this.setState(defaultState);
}

export default DisplayStates;
