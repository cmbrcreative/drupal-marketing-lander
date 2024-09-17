import StyledInput from "../FormComponents/StyledInput";
import StyledTextArea from "../FormComponents/StyledTextArea";
import StyledButton from "../FormComponents/StyledButton";
import { constants } from "../../constants/textConstants";
import { useState } from "react";

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <form className="flex flex-col gap-[1.6rem] w-full md:max-w-[37.5rem] f">
      <StyledInput
        label="Name"
        name="name"
        placeholder="Enter your name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <StyledInput
        label="Work Email"
        name="email"
        placeholder="you@example.com"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <StyledTextArea
        label="What would you like to chat about?"
        name="message"
        placeholder="Help us make the most of our time together by telling us what you’d like to discuss."
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <div className="mt-[1.2rem]">
        <StyledButton fullWidth variant="primary">{constants.hero.form.ctaButtonText}</StyledButton>
      </div>
      <p className="text-[1.4rem] text-center text-grey leading-[168%] text-cmbr-contrast-mid-dark">
        By submitting this form, I agree to the{" "}
        <a href="https://www.cmbr.agency/privacy-policy/" target="_blank" className="underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

export default HeroForm;
