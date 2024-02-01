import Footer from "../components/footer/Footer";
// import NotificationModal from "../components/modal/NotificationModal";
import BackButton from "./components/BackButton";
import ContactForm from "./components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <div className="mt-32 max-w-lg mx-auto px-6 mb-20 md:flex md:gap-10 md:max-w-5xl">
        <div className="flex-1 flex flex-col gap-6 md:gap-16 max-w-xl md:max-w-none mx-auto mb-24 ">
          <h3
            style={{
              letterSpacing: "7.75px",
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            GET IN <span className="text-yellow-500">TOUCH</span>
          </h3>
          <p>
            I am available for fun stuff - conversations, collaborations
            and&nbsp;projects
          </p>
          <div className="hidden md:block">
            <BackButton />
          </div>
        </div>
        <div className="flex-1 max-w-2xl md:max-w-none mx-auto">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
