//import { useSelector } from 'react-redux';
//import { useFetchAPIQuery } from '../../redux/APIs/api';
import store from '../../redux/index';

import s from '../ContactList/ContactList.module.css';

export const ContactList = ({ data, onDelete }) => {
  // const { data } = useFetchAPIQuery();
  // console.log(store.getState());
  console.log('data from contact list', data);
  // const contacts = data.filter(({ name }) =>
  //   name.toLowerCase().includes(data.filter.toLowerCase())
  // );
  // console.log(contacts);
  // const items = useSelector(state =>
  //   state.contactReducer.items.filter(({ name }) =>
  //     name.toLowerCase().includes(state.contactReducer.filter.toLowerCase())
  //   )
  // );
  return (
    <section className={s.contactList}>
      <ul className={s.list}>
        {data.map(item => (
          <li className={s.item} key={item.id}>
            <p className={s.name}>{item.name}:</p>
            <p className={s.number}>{item.number}</p>
            <button
              className={s.button}
              type="button"
              onClick={() => onDelete(item.id)}
              // onClick={e => {
              //   e.preventDefault();
              //   store.dispatch({ type: 'DEL', payload: item.id });
              // }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
