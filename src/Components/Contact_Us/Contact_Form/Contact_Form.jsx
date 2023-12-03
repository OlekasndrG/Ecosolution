import { ErrorMessage, Formik } from "formik";
import ContactsFormSchema from "../../../Schemas/ContactsFormSchema";
import {
  ContactForm,
  FormikError,
  Label,
  FormInput,
  InputContainer,
} from "./Contact_Form.styled";
const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const ContactsForm = () => {
  const formSubmitHandler = (data, { resetForm }) => {
    console.log(data);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactsFormSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={formSubmitHandler}
      >
        {({ errors }) => (
          <ContactForm>
            <InputContainer>
              <Label htmlFor="name">* Full name:</Label>
              <FormInput
                type="text"
                name="name"
                placeholder="John Rosie"
                errors={errors.name}
              />
              <ErrorMessage name="name" component={FormikError} />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="email">* E-mail: {errors.email}</Label>
              <FormInput
                type="email"
                name="email"
                placeholder="johnrosie@gmail.com"
                errors={errors.email}
              />
              <ErrorMessage name="email" component={FormikError} />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="phone">* Phone:</Label>

              <FormInput
                type="number"
                name="phone"
                placeholder="380961234567"
                errors={errors.phone}
              />
              <ErrorMessage name="phone" component={FormikError} />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="message">* Message: </Label>

              <FormInput
                // as="textarea"
                component="textarea"
                name="message"
                placeholder="Your message"
                errors={errors.message}
              />

              <ErrorMessage name="message" component={FormikError} />
            </InputContainer>
            <button
              type="submit"
              //   disabled={isSubmitting || !touched || !isValid || !dirty}
            >
              Send
            </button>
          </ContactForm>
        )}
      </Formik>
    </>
  );
};
// ContactsForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

export default ContactsForm;
