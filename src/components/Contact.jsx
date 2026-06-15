import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center py-20 px-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/2981345f-5ebd-4c7e-86ac-cf60ea3c7e87"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#f472b6] text-[#ccd6f6]">
            Contact
          </p>
          <p className="text-[#8892b0] py-4 text-sm">
            Submit the form below or send me an email at{" "}
            <a
              href="mailto:mesgna.mehari8@gmail.com"
              className="text-[#64ffda] hover:underline"
            >
              mesgna.mehari8@gmail.com
            </a>
          </p>
        </div>

        <input
          className="bg-[#112240] border border-[#8892b0]/30 rounded-md p-3 text-[#ccd6f6] placeholder-[#8892b0] text-sm focus:outline-none focus:border-[#64ffda] transition-colors duration-200"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="my-4 p-3 bg-[#112240] border border-[#8892b0]/30 rounded-md text-[#ccd6f6] placeholder-[#8892b0] text-sm focus:outline-none focus:border-[#64ffda] transition-colors duration-200"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="bg-[#112240] border border-[#8892b0]/30 rounded-md p-3 text-[#ccd6f6] placeholder-[#8892b0] text-sm focus:outline-none focus:border-[#64ffda] transition-colors duration-200 resize-none"
          name="message"
          rows="8"
          placeholder="Message"
        />
        <button className="mono mt-8 self-center border border-[#64ffda] text-[#64ffda] px-8 py-3 text-sm tracking-widest hover:bg-[#64ffda]/10 transition-all duration-300">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
