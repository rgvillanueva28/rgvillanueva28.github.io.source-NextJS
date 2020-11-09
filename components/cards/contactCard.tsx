import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Card from "../card";

function ContactCard() {
  return (
    <Card className="flex flex-wrap">
      <div className="mx-auto text-center inline-flex ">
        <div className="container inline">
          <div className="inline-block mx-2 bg-blue-700 rounded-full border-0">
            <a href="https://www.facebook.com/ranegillian/" rel="noreferrer noopener" target="_blank">
              <FaFacebookF size={64} className="inline text-white p-2" />
            </a>
          </div>
          <p className="text-accent-light">Facebook</p>
        </div>
        <div className="container inline">
          <div className="inline-block mx-2 bg-blue-600 rounded-full border-0">
            <a href="https://www.linkedin.com/in/ranegv/" rel="noreferrer noopener" target="_blank">
              <FaLinkedinIn size={64} className="inline text-white p-2" />
            </a>
          </div>
          <p className="text-accent-light">LinkedIn</p>
        </div>
        <div className="container inline">
          <div className="inline-block mx-2 bg-white rounded-full">
            <a href="https://github.com/rgvillanueva28" rel="noreferrer noopener" target="_blank">
              <FaGithub size={64} className="inline  text-black" />
            </a>
          </div>
          <p className="text-accent-light">Github</p>
        </div>
        <div className="container inline">
          <div className="inline-block mx-2 bg-red-700 rounded-full border-0">
            <a href="mailto:rgvillanueva28@gmail.com">
              <FiMail size={64} className="inline text-white p-2" />
            </a>
          </div>
          <p className="text-accent-light">Mail</p>
        </div>
      </div>
    </Card>
  );
}

export default ContactCard;
