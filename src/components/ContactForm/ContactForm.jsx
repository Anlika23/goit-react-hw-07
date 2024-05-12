import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsOps';

export default function ContactForm() {

  const dispatch = useDispatch();
  

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Minimum 3 characters required').max(50, 'Maximum 50 characters allowed').required('Field is required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Phone number must be in format XXX-XX-XX')
      .min(3, 'Minimum 3 characters required')
      .max(50, 'Maximum 50 characters allowed')
      .required('Field is required'),
  });

  const onSubmit = (value,  actions) => {
    dispatch(addContact(value.name, value.number));
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className={css.group}>
            <label htmlFor='name'>Name</label>
            <Field type='text' name='name' placeholder='Artem Savich' />
            <ErrorMessage className={css.error} name='name' component='div' />
          </div>

          <div className={css.group}>
            <label htmlFor='number'>Number</label>
            <Field type='text' name='number' placeholder='459-12-56' />
            <ErrorMessage className={css.error} name='number' component='div' />
          </div>

          <button className={css.btn} type='submit'>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}