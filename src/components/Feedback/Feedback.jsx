import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { List } from './Feedback.styles';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  show = bool => {
    if (!bool) return false;
    if (bool) return true;
  };

  onLeaveFeedback = event => {
    const value = event.target.textContent;

    this.setState(prevState => {
      if (value === 'Good') return { good: prevState.good + 1 };
      if (value === 'Neutral') return { neutral: prevState.neutral + 1 };
      if (value === 'Bad') return { bad: prevState.bad + 1 };
    });

    this.show(true);
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0,
    );
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const good = this.state.good;
    const interest = Math.round((good / total) * 100);
    return interest;
  };

  render() {
    const total = this.countTotalFeedback();

    const interest = this.countPositiveFeedbackPercentage(total);

    const show = this.show(total);

    return (
      <>
        <Section title={'Plese leave feedback'}>
          <List display={'flex'}>
            <FeedbackOptions
              options={['Good', 'Neutral', 'Bad']}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </List>
        </Section>

        <Section title={'Statistics'}>
          <Notification message="No feedback given" show={show}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={interest}
            />
          </Notification>
        </Section>
        {/* <Section title={'Plese leave feedback'}>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}></Section>
        <Notification message="No feedback given">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={proc}
          />
        </Notification> */}
      </>
    );
  }
}
