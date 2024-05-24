import IContactInput from "@/interfaces/IContact";
import { IContactFormValue } from "@/interfaces/schema/IContactFormValue";

export const contactInputList: IContactInput[] = [
    {
        id: "fullName",
        name: "fullName",
        type: "text",
        label: "Full name",
        placeholder: "Full name",

    },
    {
        id: "email",
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "you@company.com",

    },
    {
        id: "phoneNumber",
        name: "phoneNumber",
        type: "tel",
        label: "Phone number (Optional)",
        placeholder: "+1 (xxx) xxx-xxxx",
    },
    {
        id: "message",
        name: "message",
        type: "textarea",
        label: "Message",
        placeholder: "",

    },
];

export const contactFormInitialValues: IContactFormValue = {
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    agreement: false,
};