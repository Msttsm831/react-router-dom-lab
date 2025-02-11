import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <ul>
      {mailboxes.map((mailbox) => (
        <li key={mailbox._id}>
          <Link to={`/mailboxes/${mailbox._id}`}>
            {`Box #${mailbox._id}`}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MailboxList;
