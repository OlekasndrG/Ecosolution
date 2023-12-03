import * as Yup from "yup";

const ContactsFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(70, "Too Long!")
    .required("Wrong FullName"),
  email: Yup.string().email().required("Wrong Email"),
  phone: Yup.number().required("Wrong Phone"),
  message: Yup.string().max(256, "Too Long!"),
});
export default ContactsFormSchema;
