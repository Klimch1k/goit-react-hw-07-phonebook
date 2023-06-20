import { Input, Text, Button } from './ContactsForm.styled';
import { Container } from 'components/App.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../Redux/contactsSlice';
import shortid from 'shortid';

export default function ContactsForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: shortid(),
      name: e.currentTarget.name.value,
      number: e.currentTarget.number.value,
    };

    dispatch(addContact(contact));
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input>
        <label>
          <Text>Name</Text>
          <input
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <Text>Number</Text>
          <input
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </Input>

      <Container>
        <Button type="submit">Add contact</Button>
      </Container>
    </form>
  );
}
