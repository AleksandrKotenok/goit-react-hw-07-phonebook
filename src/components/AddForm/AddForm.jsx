import { useCreateContactMutation } from '../../redux/api';

import s from '../AddForm/AddForm.module.css';

export default function AddForm() {
  const [createContact, { isLoading }] = useCreateContactMutation();

  const submitContact = e => {
    e.preventDefault();
    const newContact = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };
    createContact(newContact);
    e.currentTarget.reset();
  };

  return (
    <section className={s.addForm}>
      <form className={s.form} autoComplete="off" onSubmit={submitContact}>
        <label className={s.label} htmlFor={'name'}>
          Name:
        </label>
        <input
          id={'name'}
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={s.label} htmlFor={'tel'}>
          Tel:
        </label>
        <input
          id={'tel'}
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={s.button} type="submit" disabled={isLoading}>
          {isLoading ? `Adding...` : `Add contact`}
        </button>
      </form>
    </section>
  );
}
