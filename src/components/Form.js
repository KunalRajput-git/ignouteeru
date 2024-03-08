import { useState } from "react";
import FormInput from "./FormInput";
import Select from "./Select";
import Spinner from "./Spinner";

const Form = ({ onSubscribeHandler, isLoading }) => {
  const [subscription, setSubscription] = useState({
    name: "",
    enrollmentno: "",
    email: "",
    program: "",
  });

  const updateSubscription = (name, value) => {
    setSubscription((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isSubscribeBtnDisabled =
    !subscription.name.trim().length ||
    !subscription.enrollmentno.trim().length ||
    !subscription.email.trim().length ||
    !emailRegex.test(subscription.email) ||
    !subscription.program.trim() ||
    isLoading;
  return (
    <form>
      <FormInput
        placeholder="Enter your name"
        type="text"
        callback={(name) => updateSubscription("name", name)}
      />
      <FormInput
        placeholder="Enter your enrollment no"
        type="number"
        callback={(enrollmentno) =>
          updateSubscription("enrollmentno", enrollmentno)
        }
      />
      <FormInput
        placeholder="Enter your email"
        type="email"
        callback={(email) => updateSubscription("email", email)}
      />
      <Select callback={(program) => updateSubscription("program", program)} />
      <button
        disabled={isSubscribeBtnDisabled}
        className="w-full mt-4 p-4 rounded-md bg-yellow-500 outline-none focus:ring-yellow-300 focus:ring-2 text-yellow-900 font-bold disabled:bg-yellow-100 disabled:border disabled:border-yellow-100 disabled:cursor-not-allowed flex items-center justify-center"
        onClick={(e) => {
          onSubscribeHandler(e, subscription);
        }}
      >
        {isLoading ? <Spinner /> : "Subscribe"}
      </button>
    </form>
  );
};

export default Form;
