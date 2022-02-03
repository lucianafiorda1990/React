import { Component } from 'react';
import './styles.css';

export class ome extends Component {
    state = {
        counter: 0
    }

    handleClick = () => {
        this.setState(
            (prevState, prevProps) => {
                return { counter: prevState.counter + prevProps.numberToImcrement }
            },
            () => {
                console.log('POST', this.state.counter);
            }
        );
    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.counter}</h1>
                <button onclick={this.handleClick}>Increment</button>
            </div>
        );
    }
}