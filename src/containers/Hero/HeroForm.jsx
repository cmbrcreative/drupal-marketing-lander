import { useState } from "react";
import { globalConstants } from "../../_GlobalConstants/globalConstants";
import StyledButtonLink from "../../formComponents/StyledButton";
import StyledInput from "../../formComponents/StyledInput";
import StyledTextArea from "../../formComponents/StyledTextArea";

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <form className="f flex w-full flex-col gap-[1.6rem] md:max-w-[37.5rem]">
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
        <StyledButtonLink fullWidth variant="primary">
          {globalConstants.hero.form.ctaButtonText}
        </StyledButtonLink>
      </div>
      <p className="text-cmbr-contrast-mid-dark text-center text-[1.4rem] leading-[168%] text-grey">
        By submitting this form, I agree to the{" "}
        <a
          href="https://www.cmbr.agency/privacy-policy/"
          target="_blank"
          className="underline"
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

export default HeroForm;
