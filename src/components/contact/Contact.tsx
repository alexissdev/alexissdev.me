import useContact from "@/lib/hooks/useContact";

export default function Contact() {
  const { contact, handleChange, handleSubmit } = useContact();

  return (
    <div className="bg-primary h-screen w-full grid place-items-center text-white">
      <div className="bg-secondary rounded-md shadow-md flex flex-row">
        <div className="p-8 md:p-14 rounded-md transition md:block">
          <div className="flex justify-between">
            <h2 className="text-white text-xl">Contact Information</h2>
          </div>
          <div className="mt-6 flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-slate-200 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-slate-200 text-xs hover:text-hover">Name:</h2>
              <p className="text-white text-xs">Alexis Costa</p>
            </div>
          </div>

          <div className="mt-4 flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-slate-200 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-slate-200 text-xs hover:text-hover">
                Email:
              </h2>
              <p className="text-white text-xs">alesideveloper@gmail.com</p>
            </div>
          </div>

          <div className="mt-5 flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-slate-200 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-slate-200 text-xs hover:text-hover">
                Address:
              </h2>
              <p className="text-white text-xs">
                Pilar, Buenos Aires, Argentina
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 py-8 text-black">
          <div className="flex justify-between">
            <h2 className="text-xl text-white hover:text-hover">
              Your Information.
            </h2>
          </div>
          <input
            type="text"
            placeholder="Your name."
            className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            value={contact.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Your email."
            className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            value={contact.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Your subject."
            className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
            value={contact.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
          />
          <br />
          <textarea
            placeholder="Your message."
            value={contact.message}
            className="w-full text-xs px-3 py-2 h-20 my-2 outline-none rounded-md border focus:shadow-sm resize-none"
            onChange={(e) => handleChange("message", e.target.value)}
          ></textarea>
          <br />
          <input
            type="submit"
            value="Send"
            className="bg-primary px-4 py-2 rounded-md text-white text-xs cursor-pointer hover:text-hover hover:shadow-md"
            onClick={(e) => handleSubmit(e)}
          />
        </div>
      </div>
    </div>
  );
}
