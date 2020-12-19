import { Component } from "react";
import { connect } from 'react-redux';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                {/* Truyền Props dạng Children */}
                {this.showProducts(products)}
            </Products>

        );
    }

    showProducts(products) {
        var result = null;
        var {onAddToCart,onBuySuccess} = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    index={index}
                    onAddToCart = {onAddToCart}
                    onBuySuccess ={onBuySuccess}
                />
            })
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            invertory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired
}

// Nếu ko đúng kiểu thì sẽ cảnh bảo thôi
// PropType là một trong những tính năng mạnh của reacts, ở một dự án lớn thì nên check

const mapStateToDrops = state => {
    return {
        products: state.products
    }
}

const mapDispatchToDrops = (dispatch, props) => {
    return {     
      onAddToCart: (product) => {
        dispatch(actions.actAddToCart(product,1));
      },
      onBuySuccess:()=>{
          dispatch(actions.actBuySuccess());
      }
    }
  }


export default connect(mapStateToDrops, mapDispatchToDrops)(ProductsContainer);