import { useState } from "react";
import { toast } from "sonner";
import Contact, { emptyContact } from "../model/contact.model";
import { checkEmptyProperties } from "../util/contact.util";

const styles: React.CSSProperties = {
  background: "#291533",
  border: "1px solid #291533",
};

export default function useContact() {
  const [contact, setContact] = useState<Contact>(emptyContact);

  const handleChange = (name: string, value: string) => {
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const emptyProperty: string = checkEmptyProperties(contact);
    if (emptyProperty && emptyProperty.length > 0) {
      return toast.error(`Please enter your ${emptyProperty}.`, {
        style: styles,
      });
    }

    setContact(emptyContact);

    toast.success("Message sent successfully!", {
      style: styles,
    });
  };

  return { contact, handleChange, handleSubmit };
}
