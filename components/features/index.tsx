import Image from "next/image";
import circle from "./assets/icons/circle.svg";
import clue from "./assets/icons/clue.svg";

const Features = () => {
  return (
    <>
      <div className="features ">
        <h2>Why Here?</h2>
        <p>
          Our unwavering commitment to tech excellence ensures flawless repairs.
          Opt for – where Speed, Reliability, and Affordability Meet!
        </p>
        <div className="feature-cards">
          <div className="feature-card">
            <h2>30 Min</h2>
            <h3>Quick Repair</h3>
            <p>
              Our Speedy Repair Guarantee! Well have your device back in action
              in under 30 minutes.
            </p>
          </div>
          <div className="feature-card">
            <div>
              <Image width={72} height={72} src={circle} alt="circle" />
            </div>
            <h3>Warranty for Repair</h3>
            <p>
              Ensuring flawless device performance, we stand confidently behind
              our work.
            </p>
          </div>
          <div className="feature-card">
            <h2>11 Years</h2>
            <h3>Years of Experience</h3>
            <p>
              With over 11 years of industry experience, our proven expertise
              guarantees exceptional tech repairs and unmatched service quality.
            </p>
          </div>
          <div className="feature-card">
            <Image src={clue} width={72} height={72} alt="clue" />
            <h3>Professional Technicians</h3>
            <p>
              Our Professional Technicians: Your devices in safe hands! We
              resolve issues with expertise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
