import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number must be less than 50 characters')
    .required('Number is required'),
});

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div className={css.field}>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" id="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm; 