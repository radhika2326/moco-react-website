
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPalette,
  faIndustry,
  faTruck,
  faWrench
} from "@fortawesome/free-solid-svg-icons";
import "./Process.css";

function Process() {
  const steps = [
    {
      icon: faComments,
      title: "Consultation",
      description: "Share your vision and requirements"
    },
    {
      icon: faPalette,
      title: "Design",
      description: "Get a 3D customized kitchen plan"
    },
    {
      icon: faIndustry,
      title: "Manufacturing",
      description: "Precision-built in our factory"
    },
    {
      icon: faTruck,
      title: "Delivery",
      description: "Safe delivery to your doorstep"
    },
    {
      icon: faWrench,
      title: "Installation",
      description: "Expert fitting in just 7 days"
    }
  ];

  return (
    <section className="process" id="process">
      <div className="process__heading">
        <p>OUR PROCESS</p>
        <h2>From Vision to Reality</h2>
      </div>

      <div className="process__steps">
        {steps.map((step, index) => (
          <div className="process__step" key={index}>
            <div className="process__icon">
              <FontAwesomeIcon icon={step.icon} />
            </div>

            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
