export default interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const emptyContact: Contact = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
