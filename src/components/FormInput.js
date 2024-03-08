const FormInput = ({ placeholder, type, callback }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="border w-full focus:border-none mt-2 p-2 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 focus:text-yellow-400 focus:font-bold text-gray-500"
      required
      onChange={(e) => callback(e.target.value)}
    />
  );
};

export default FormInput;
