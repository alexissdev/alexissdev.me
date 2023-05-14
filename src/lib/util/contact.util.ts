import Contact from "../model/contact.model";

export function checkEmptyProperties(contact: Contact): string {
  if (!contact.name) {
    return "name";
  }

  if (!contact.email) {
    return "email";
  }

  if (!contact.subject) {
    return "subject";
  }

  if (!contact.message) {
    return "message";
  }

  return "";
}
