import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

// import { deleteContact } from "../../redux/contactsSlice";
import css from './Contact.module.css';
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
const dispatch = useDispatch();

const handleDelete = () => { dispatch(deleteContact(contact.id))};
    
    return (
        <div className={css.container}>
            <div>
                <p className={css.text}><FaUser className={css.icon} />{contact.name}</p>
                <p className={css.text}><IoIosCall className={css.icon} />{contact.number}</p>
            </div>
           
            <button className={css.btnDelete} onClick={handleDelete}>Delete</button>
        </div>
    );
}
