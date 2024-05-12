import css from './Message.module.css';

function Message({ message }) {
  return message && <div className={css.message}>{message}</div>;
}

export default Message;