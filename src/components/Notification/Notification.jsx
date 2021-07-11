export const Notification = ({ children, message, show }) => {
  return <>{show ? <div>{children}</div> : <p>{message}</p>}</>;
};
