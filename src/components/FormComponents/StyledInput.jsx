const StyledInput = ({ required = false, label, name = "input", ...props }) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="font-suisse text-[1.4rem] font-medium leading-[2.352rem]">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className={label && "mt-2"}>
        <input
          name={name}
          className={`w-full rounded-[1.2rem] border-0 bg-white px-[1.6rem] py-[1.2rem] ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-cmbr-accent-hc  sm:leading-6 dark:ring-cmbr-contrast-mid-dark dark:placeholder:text-cmbr-contrast-mid text-[1.4rem]`}
          {...props}
        />
      </div>
    </div>
  );
};

export default StyledInput;
