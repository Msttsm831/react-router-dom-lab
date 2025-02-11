import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((m) => m._id === parseInt(mailboxId));

  if (!mailbox) {
    return <p>Mailbox Not Found!</p>;
  }

  return (
    <div>
      <h2>Details for Box #{mailbox._id}</h2>
      <p>Owner: {mailbox.boxOwner}</p>
      <p>Size: {mailbox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;
