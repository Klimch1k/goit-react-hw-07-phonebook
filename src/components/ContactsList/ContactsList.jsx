import { Button } from 'components/ContactsForm/ContactsForm.styled';
import { Container } from 'components/App.styled';
import { List, WrapperButtonDelete } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { deleteContact } from 'Redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { getFilterState } from '../../Redux/filterSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.info);
  const filterValue = useSelector(getFilterState);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Container>
      <List>
        {filteredContacts.map(({ name, number, id }) => {
          return (
            <li key={shortid()}>
              {name} {number}
              <WrapperButtonDelete>
                <Button onClick={() => onDelete(id)}>Delete</Button>
              </WrapperButtonDelete>
            </li>
          );
        })}
      </List>
    </Container>
  );
};

export default ContactList;
