import { useFetchAPIQuery, useDeleteContactMutation } from '../../redux/api';
import { ContactItem } from './ContactItem/ContactItem';

import s from '../ContactList/ContactList.module.css';

export const ContactList = () => {
  const { data } = useFetchAPIQuery();

  return (
    <section className={s.contactList}>
      <ul className={s.list}>
        {data && data.map(item => <ContactItem key={item.id} {...item} />)}
      </ul>
    </section>
  );
};
