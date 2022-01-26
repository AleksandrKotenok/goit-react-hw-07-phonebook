import AddForm from '../AddForm/AddForm';
import Filter from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <AddForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
