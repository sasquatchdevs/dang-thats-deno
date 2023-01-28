interface IFormFieldProps {
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}

export const InputField = (
  { name, type = "text", required = false, error }: IFormFieldProps,
) => {
  return (
    <fieldset className="w-full">
      <label class="py-4 block capitalize block" htmlFor={name}>
        {name} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        class="w-full p-3 border border-solid border-gray-300 overflow-visible m-0"
        autocomplete="on"
        required={required}
      />
      <p className="text-red-500 text-xs pl-3 pt-2 min-h-[8px]">
        {error && error}
      </p>
    </fieldset>
  );
};
