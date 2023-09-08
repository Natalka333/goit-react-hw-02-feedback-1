import css from './Feedback.module.css';
import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () =>
    this.setState(prevState => ({ good: prevState.good + 1 }));

  handleClickNeutral = () =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));

  handleClickNeutralBad = () =>
    this.setState(prevState => ({ bad: prevState.bad + 1 }));

  render() {
    return (
      <div>
        <h2 className={css.title}>Please leave feedback</h2>
        <div className={css.btn}>
          <button onClick={this.handleClickGood}>Good</button>
          <button onClick={this.handleClickNeutral}>Neutral</button>
          <button onClick={this.handleClickNeutralBad}>Bad</button>
        </div>
        <div>
          <h2 className={css.title}>Statistics</h2>
          <div className={css.review}>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
          </div>
          <div>
            <p>Total: 0</p>
            <p>Pozitive feedback: 0</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
