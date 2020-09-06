import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';

import FeedbackOptions from './components/FeedBackOptions/FeedBackOptions';
import SectionTitle from './components/SectionTitle/SectionTitle';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedBack = event => {
    const name = event.target.name;

    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    let total = 0;
    total = this.state.good + this.state.bad + this.state.neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100 || 0;
  };

  render() {
    return (
      <div>
        <SectionTitle>
          <FeedbackOptions options={this.addFeedBack} />

          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </SectionTitle>
      </div>
    );
  }
}

export default App;
