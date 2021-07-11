import { Button, ItemList } from '../Feedback/Feedback.styles';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(button => {
        return (
          <ItemList key={button} gapRight={10}>
            <Button type="submit" onClick={onLeaveFeedback}>
              {button}
            </Button>
          </ItemList>
        );
      })}
      {/* <ul>
        {options.map(button => {
          return (
            <li key={button}>
              <button onClick={onLeaveFeedback}>{button}</button>
            </li>
          );
        })}
      </ul> */}
    </>
  );
};
