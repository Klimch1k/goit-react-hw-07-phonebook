import { Button } from 'components/ContactsForm/ContactsForm.styled';
import { Container } from 'components/App.styled';
import { List, WrapperButtonDelete } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/operations';
import { useDispatch } from 'react-redux';
import { selectContacts, selectFilterState } from '../../Redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterState);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <Container>
      <List>
        {filteredContacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              {name} {number}
              <WrapperButtonDelete>
                <Button onClick={() => dispatch(deleteContact(id))}>
                  Delete
                </Button>
              </WrapperButtonDelete>
            </li>
          );
        })}
      </List>
    </Container>
  );
};

export default ContactList;
