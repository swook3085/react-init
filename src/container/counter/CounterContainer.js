import React from "react";
import Counter from "../../components/counter/Counter";
import { connect } from 'react-redux';
import { onAgeUp, onAgeDown } from "../../redux/actions/Action";
import axiosInstance from "../../common/axiosModule";

class CounterContainer extends React.Component {
    handleIncrement = () => {
        this.props.onAgeUp();
    };

    handleDecrement = () => {
        this.props.onAgeDown();
    };

    httpSearch = () => {
        axiosInstance.get("/users/random_user").then((res) => {
            console.log(res)
        });
    }
    render() {
        return (
            <>
                <Counter age={this.props.store.age} onAgeUp={this.props.onAgeUp} onAgeDown={this.props.onAgeDown} httpSearch={this.httpSearch} />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        store: state.store
    };
};

const mapDispachToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch(onAgeUp()),
        onAgeDown: () => dispatch(onAgeDown())
    };
};
export default connect(mapStateToProps, mapDispachToProps)(CounterContainer);