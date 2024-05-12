import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcReadingEbook } from 'react-icons/fc';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import Message from '../Message/Message';
import Loader from '../Loader/Loader'; 
import css from './App.module.css';
import { fetchContacts } from "../../redux/contactsOps";

function App() {
 const dispatch = useDispatch();
 const contactsItems = useSelector(state => state.contacts.items);
 const isLoading = useSelector(state => state.contacts.loading);
 const error = useSelector(state => state.contacts.error);

 useEffect(() => {
   dispatch(fetchContacts());
 }, [dispatch]);

  return (
      <div className={css.container}>
        <h1>
          <FcReadingEbook className={css.icon} /> Phonebook
        </h1>
      <ContactForm />
      {isLoading ? (
          <Loader isLoading={isLoading} /> 
        ) : error ? (
          <Message message={error} />
        ) : contactsItems.length !== 0 ? (
            <>
              <SearchBox />
              <ContactList />
            </>
          ) : (
            <Message message="Please add your first contact to the empty phonebook!" />
          )}
      </div>
  );
}

export default App;
