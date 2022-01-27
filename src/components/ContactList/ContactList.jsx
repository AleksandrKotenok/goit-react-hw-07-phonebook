import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts-selectors';
import { useFetchAPIQuery } from '../../redux/api';
import { ContactItem } from './ContactItem/ContactItem';

import s from '../ContactList/ContactList.module.css';

export const ContactList = () => {
  const filterValue = useSelector(getFilter);
  const { data } = useFetchAPIQuery(filterValue);

  return (
    <section className={s.contactList}>
      <ul className={s.list}>
        {data && data.map(item => <ContactItem key={item.id} {...item} />)}
      </ul>
    </section>
  );
};
