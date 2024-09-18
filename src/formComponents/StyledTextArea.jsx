import { useEffect, useRef } from "react";

const StyledTextArea = ({ required = false, label, name = "input", ...props }) => {

    const textareaRef = useRef(null);

    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, []);

    const handleInput = (event) => {
      const textarea = event.target;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    };
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="font-suisse text-[1.4rem] font-medium leading-[2.352rem]"
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className={label && "mt-2"}>
        <textarea
          name={name}
          className={` w-full rounded-[1.2rem] border-0 bg-white px-[1.6rem] py-[1.2rem] ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:border-0 focus:ring-2 focus:ring-inset      text-[1.4rem] placeholder:leading-[2.016rem] min-h-[6.4rem] resize-none`}
          ref={textareaRef}
          onInput={handleInput}
          {...props}
        />
      </div>
    </div>
  );
};

export default StyledTextArea;
