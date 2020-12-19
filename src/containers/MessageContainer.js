import { Component } from "react";
import { connect } from 'react-redux';
import Message from "../components/Message";
import * as actions from './../actions/index';
class MessageContainer extends Component {
    render() {
        var {message} = this.props;
        return (
          <Message message={message}/>
        );
    }
    
    
}

const mapStateToDrops = state => {
    return {
        message: state.message,
    }
}

export default connect(mapStateToDrops, null)(MessageContainer);