import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getFilteredContacts } from '../../redux/contacts-selectors';
import { addCont } from '../../redux/contacts-actions';

import s from '../AddForm/AddForm.module.css';

export default function AddForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const handleChange = ({ currentTarget: { name, value } }) =>
    name === 'input-name' ? setName(value) : setNumber(value);
  const submitContact = e => {
    e.preventDefault();
    const checkName = contacts.find(contact => name === contact.name);
    if (checkName) alert(`${name} is already in contacts`);
    dispatch(addCont({ name, number }));
    resetState();
  };
  const resetState = () => {
    setName('');
    setNumber('');
  };
  return (
    <section className={s.addForm}>
      <form className={s.form}>
        <label className={s.label} htmlFor={'name'}>
          Name:
        </label>
        <input
          id={'name'}
          className={s.input}
          type="text"
          name="input-name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <label className={s.label} htmlFor={'tel'}>
          Tel:
        </label>
        <input
          id={'tel'}
          className={s.input}
          type="tel"
          name="input-number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
        <button className={s.button} type="submit" onClick={submitContact}>
          Add contact
        </button>
      </form>
    </section>
  );
}
