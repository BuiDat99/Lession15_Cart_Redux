import { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carts from './../components/Carts';
import CartItem from "../components/CartItem";
import * as Message from './../constants/Message';
import PriceTotal from "../components/PriceTotal";
import * as actions from './../actions/index';
class CartContainer extends Component {
    render() {
        var { carts } = this.props;
        return (
            <Carts>
                {this.showCart(carts)}
                {this.showTotal(carts)}
            </Carts>

        );
    }
    showCart(carts) {
        var result = Message.MSG_CART_EMPTY;
        var {onDeleteCart,onAddOneCart,onSubOneCart,
            onDeleteCartSuccess,onUpdateCartSuccess} = this.props;
        if (carts.length > 0) {
            result = carts.map((cart, index) => {
                return <CartItem
                    key={index}
                    cart={cart}
                    index={index}
                    onDeleteCart={onDeleteCart}
                    onAddOneCart = {onAddOneCart}
                    onSubOneCart = {onSubOneCart}
                    onDeleteCartSuccess={onDeleteCartSuccess}
                    onUpdateCartSuccess={onUpdateCartSuccess}
                    />
            })
        }
        return result;
    }
    showTotal(carts) {
        var result = null;
        if (carts.length > 0) {
            result = <PriceTotal
                    cart={carts}
                     />
        }
        return result;
    }
}



CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                invertory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

// Nếu ko đúng kiểu thì sẽ cảnh bảo thôi
// PropType là một trong những tính năng mạnh của reacts, ở một dự án lớn thì nên check

const mapStateToDrops = state => {
    return {
        carts: state.cart,
    }
}

const mapDispatchToDrops = (dispatch, props) => {
    return {     
      onDeleteCart: (id) => {
        dispatch(actions.actDeleteCart(id));
      },
      onAddOneCart: (id) => {
        dispatch(actions.actAddOneCart(id));
      },
      onSubOneCart: (id) => {
        dispatch(actions.actSubOneCart(id));
      },
      onDeleteCartSuccess: () => {
        dispatch(actions.actDeleteCartSuccess());
      },
      onUpdateCartSuccess: () => {
        dispatch(actions.actEditCartSuccess());
      },
    }
  }

export default connect(mapStateToDrops, mapDispatchToDrops)(CartContainer);