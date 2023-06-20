import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { Container, Title } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/operations';
import { selectError, selectIsLoading } from '../Redux/selectors';

export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        {isLoading && !error && <b>Request in progress...</b>}
        <Title>Phonebook</Title>

        <ContactsForm />
      </Container>
      <Container>
        <Title>Contacts</Title>

        <h3>Find contacts by name</h3>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}
