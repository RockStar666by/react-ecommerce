import React from 'react';
import { connect } from 'react-redux';
import { bool, number, string, func } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import * as Styles from './styles';
import { increaseCount, decreaseCount } from '../../../redux/actions';

const theme = { primary: '#5ece7b' };

export class CartCounterTemplate extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.quantity };
    this.onMinusClick = this.onMinusClick.bind(this);
    this.onPlusClick = this.onPlusClick.bind(this);
  }

  onMinusClick() {
    if (this.state.counter > 1) {
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
      this.props.decreaseCount(this.props.productId);
    }
  }

  onPlusClick() {
    if (this.state.counter < 999) {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
      this.props.increaseCount(this.props.productId);
    }
  }

  render() {
    const { mini } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Styles.CounterContainer mini={mini}>
          <Styles.ChangeCountButton mini={mini} onClick={this.onPlusClick}>
            ＋
          </Styles.ChangeCountButton>
          <Styles.Quantity mini={mini}>{this.state.counter}</Styles.Quantity>
          <Styles.ChangeCountButton mini={mini} onClick={this.onMinusClick}>
            －
          </Styles.ChangeCountButton>
        </Styles.CounterContainer>
      </ThemeProvider>
    );
  }
}

const actionCreators = { increaseCount, decreaseCount };

export const CartCounter = connect(null, actionCreators)(CartCounterTemplate);

CartCounterTemplate.propTypes = {
  mini: bool,
  quantity: number.isRequired,
  productId: string.isRequired,
  increaseCount: func.isRequired,
  decreaseCount: func.isRequired
};
CartCounterTemplate.defaultProps = { mini: false };
