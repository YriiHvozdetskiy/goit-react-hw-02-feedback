import { TitleH1 } from '../Feedback/Feedback.styles';

export const Section = ({ children, title }) => {
  return (
    <>
      <TitleH1>{title}</TitleH1>
      {children}
      {/* <h1>{title}</h1>
      {children} */}
    </>
  );
};