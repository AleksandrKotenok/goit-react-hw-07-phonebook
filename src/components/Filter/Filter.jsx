import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts-selectors';
import { filCont } from '../../redux/contacts-actions';

import s from '../Filter/Filter.module.css';

export default function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = ({ currentTarget: { value } }) => dispatch(filCont(value));

  return (
    <form className={s.form}>
      <label className={s.label} htmlFor={'filter'}>
        Find contact by name:
      </label>
      <input
        id={'filter'}
        className={s.input}
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </form>
  );
}
