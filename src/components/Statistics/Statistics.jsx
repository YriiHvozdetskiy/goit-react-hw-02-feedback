import { List, ItemList, Span } from '../Feedback/Feedback.styles';

export const Statistics = ({
  good,
  neutral,
  bad,
  positivePercentage,
  total,
}) => {
  return (
    <>
      <List>
        <ItemList gapBottom={10}>
          Good:<Span gapLeft={5}>{good}</Span>
        </ItemList>
        <ItemList gapBottom={10}>
          Neutral:<Span gapLeft={5}>{neutral}</Span>
        </ItemList>
        <ItemList gapBottom={10}>
          Bad:<Span gapLeft={5}>{bad}</Span>
        </ItemList>
        <ItemList gapBottom={10}>
          Total:<Span gapLeft={5}>{total}</Span>
        </ItemList>
        <ItemList>
          Positive feedback:<Span gapLeft={5}>{positivePercentage}</Span>%
        </ItemList>
      </List>
    </>
  );
};
