import { useDeleteContactMutation } from '../../../redux/api';
import s from '../ContactItem/ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <li className={s.item}>
      <p className={s.name}>{name}:</p>
      <p className={s.number}>{number}</p>
      <button
        className={s.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};
