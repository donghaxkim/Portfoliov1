import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="section border-b border-neutral-900 pb-4" id="contact">
      <h1 className="my-20 text-center text-4xl">
        Contact
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-xl">Email: {CONTACT.email}</p>
            <p className="text-xl">Phone: {CONTACT.phoneNum}</p>
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default Contact;
