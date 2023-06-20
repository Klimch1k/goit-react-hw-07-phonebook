import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { Container, Title } from './App.styled';

export default function App() {
  return (
    <>
      <Container>
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
