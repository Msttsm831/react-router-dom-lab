import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox({ boxOwner, boxSize });
    navigate('/mailboxes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Box Owner:
        <input type="text" value={boxOwner} onChange={(e) => setBoxOwner(e.target.value)} />
      </label>
      <label>
        Box Size:
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;
