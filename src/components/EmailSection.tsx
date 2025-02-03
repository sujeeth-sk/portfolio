import GithubIcon from "../assets/github-icon.svg";
import LinkedinIcon from "../assets/linkedin-icon.svg";

const EmailSection = () => {
  return (
    <section className="grid grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="h-72 w-72 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 rounded-full z-0 blur-xl absolute top-1/3 -left-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      {/* <div className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900 to-transparent opacity-30 rounded-full h-80 w-80 z-0 blur-xl absolute top-1/3 -left-20 transform -translate-x-1/2 -translate-y-1/2"></div> */}
      <div className="z-10">
        <h5>Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I'm always open to new projects, collaborations or employment
          opportunities. Let's connect! <br />
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 ">
          <a href="https://github.com/sujeeth-sk" target="_blank">
            <img src={GithubIcon} alt="Github Icon" className="" />
          </a>
          <a
            href="https://www.linkedin.com/in/sujeeth-kompella-051522267"
            target="_blank"
          >
            <img src={LinkedinIcon} alt="Github Icon" className="" />
          </a>
        </div>
      </div>
      <div>
        <form className="flex flex-col ">
          <div className="mb-6">
            <label
              htmlFor="email"
              typeof="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9EB3BA] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="envelope@mailCarriage.dev"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              typeof="text"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9EB3BA] text-gray-100 text-sm rounded-lg w-full p-2.5"
              placeholder="It's a dev day today!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              placeholder="Let's talk about something cool to build..."
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9EB3BA] text-gray-100 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white py-2.5 font-medium rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
