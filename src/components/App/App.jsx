import AddForm from '../AddForm/AddForm';
import Filter from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { useFetchAPIQuery, useDeleteContactMutation } from '../../redux/api';

export default function App() {
  //const { data } = useFetchAPIQuery();
  //const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  //console.log('data ', data);
  return (
    <>
      <h1>Phonebook</h1>
      <AddForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList
      //data={data}
      //onDelete={deleteContact}
      //deleting={isDeleting}
      />
    </>
  );
}
