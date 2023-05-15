import Contact from "../model/contact.model";
import { validateEmail } from "./email.util";

export function checkEmptyProperties(contact: Contact): string {
  if (!contact.name) {
    return "name";
  }

  if (!contact.email || !validateEmail(contact.email)) {
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
