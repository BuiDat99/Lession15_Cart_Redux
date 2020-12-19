import { Component } from "react";

class CartItem extends Component {
    render() {
        var { cart } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={cart.product.image} alt={cart.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cart.product.name}</strong>
                    </h5>
                </td>
                <td>{cart.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{cart.quantity} </span>
                    <div
                   
                    className="btn-group radio-group" data-toggle="buttons">
                        <label  onClick={()=>this.onAddOneCart(cart.product.id)} className="btn btn-sm btn-primary
                                          btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>   
                        <label
                        onClick={()=>this.onSubOneCart(cart.product.id)}
                        className="btn btn-sm btn-primary
                                          btn-rounded waves-effect waves-light">
                            <a >+</a>
                        </label>
                    </div >
                </td>
                <td>{this.total(cart.product.price,cart.quantity)}$</td>
                <td>
                    <button
                    onClick={()=>this.onDeleteCart(cart.product.id)}
                     type="button"
                      className="btn btn-sm btn-primary waves-effect waves-light"
                       data-toggle="tooltip" data-placement="top"
                        title data-original-title="Remove item">
                        X
                  </button>
                </td>
            </tr>
        );
    }

    total=(price,quantity)=>{
        return price * quantity;
    }
    onDeleteCart=(id)=>{
        this.props.onDeleteCart(id);
        this.props.onDeleteCartSuccess();
    }
    onAddOneCart=(id)=>{
        this.props.onAddOneCart(id);
        this.props.onUpdateCartSuccess();
    }
    onSubOneCart=(id)=>{
        this.props.onSubOneCart(id);
        this.props.onUpdateCartSuccess();
    }
}

export default CartItem;