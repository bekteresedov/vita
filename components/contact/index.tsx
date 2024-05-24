"use client";
import { useFormik } from "formik";
import Button from "../UI/button";
import location from "./assets/icons/location.svg";
import email from "./assets/icons/email.svg";
import arrow from "./assets/icons/arrow.svg";
import Image from "next/image";
import Link from "next/link";
import { IContactFormValue } from "@/interfaces/schema/IContactFormValue";
import { contactValidationSchema } from "@/schema/contact-validation-schema";
import Input from "../UI/input";

import {
  contactFormInitialValues,
  contactInputList,
} from "@/constants/contact";

const Contact = () => {
  const handleSubmit = (values: IContactFormValue) => {
    console.log("Form data", values);
  };

  const formik = useFormik<IContactFormValue>({
    initialValues: contactFormInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="contact">
        <div>
          <h2>Contact us</h2>
          <h3>Get in touch</h3>
          <h4>
            Wed love to hear from you. Please fill out this form or shoot us an
            email.
          </h4>
          <div className="list">
            <Image width={24} height={24} src={email} alt="email icon" />
            <h5>Email</h5>
            <p>Our friendly team is here to help.</p>
            <Link className="link" href="mailto:hi@test.com">
              hi@test.com
            </Link>
          </div>
          <div className="list">
            <Image width={24} height={24} src={location} alt="location icon" />
            <h5>6 different states</h5>
            <p>Las Vegas, Chicago, New York, Seattle, California</p>
            <Link className="link" href="#">
              <span>See All Locations</span>
              <Image width={20} height={20} src={arrow} alt="arrow icon" />
            </Link>
          </div>
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            {contactInputList.map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.name}
                    value={
                      formik.values[
                        field.name as keyof IContactFormValue
                      ] as string
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <Input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    value={
                      formik.values[
                        field.name as keyof IContactFormValue
                      ] as string
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="input"
                    placeholder={field.placeholder}
                  />
                )}
                {formik.touched[field.name as keyof IContactFormValue] &&
                  formik.errors[field.name as keyof IContactFormValue] && (
                    <p className="error-message">
                      {formik.errors[field.name as keyof IContactFormValue]}
                    </p>
                  )}
              </div>
            ))}
            <div className="input-checkbox">
              <label htmlFor="agreement">
                <span>You agree to our friendly </span>
                <Link href={"#"}>privacy policy.</Link>
              </label>
              <Input
                type="checkbox"
                id="agreement"
                name="agreement"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <Button className="btn-send" type="submit">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
