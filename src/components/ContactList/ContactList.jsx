
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

import { selectNameFilter } from '../../redux/filtersSlice';
import { selectContact } from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(selectContact);
  const valueFilter = useSelector(selectNameFilter);

  const filtreContacts = contacts.filter((contact) => {
  // console.log("Contact name:", contact.name); 
  return contact.name && typeof contact.name === 'string' && contact.name.toLowerCase().includes(valueFilter.toLowerCase());
  });
   console.log("Contact IDs:", filtreContacts.map(contact => contact.id));

  return (
      <ul className={css.list}>
        {filtreContacts.map((item) => (
          <li key={item.id} className={css.item} >
            <Contact contact={item} />
          </li>
        ))}
      </ul>
  );
}





