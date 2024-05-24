"use client";
import { faqList } from "@/constants/faq";
import { useState } from "react";
import plus from "./assets/icons/plus.svg";
import minus from "./assets/icons/minus.svg";
import Image from "next/image";
import Button from "../UI/button";


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq">
        <div>
          <div>
            <h2>Frequently Asked Questions</h2>
            <h3>Everything you need to know about</h3>
          </div>
          <ul className="faq-list">
            {faqList.map((faq, index) => (
              <li className="faq-item" key={index + faq.question}>
                <div>
                  <p>{faq.question}</p>
                  <Image
                    width={24}
                    height={24}
                    src={openIndex == index ? minus : plus}
                    alt="faq icon"
                    onClick={() => toggleAnswer(index)}
                  />
                </div>

                {openIndex === index && (
                  <div className="answer">{faq.answer}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="faq-footer">
          <div>
            <h4>Still have questions?</h4>
            <p>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <Button className="faq-btn">Get in touch</Button>
        </div>
      </div>
    </>
  );
};

export default FAQ;
