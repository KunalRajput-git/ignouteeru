import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";
import axios from "axios";
import { API_PROD } from "./constants";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscriptionSuccess, setIsSubscriptionSuccess] = useState(false);

  const onSubscribeHandler = async (e, subscription) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(API_PROD, subscription);
      setIsSubscriptionSuccess(true);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error.message);
        console.log(error.response.data.error.message);
      } else {
        toast.error(
          "We apologize for the inconvenience. Our services are currently unavailable. Please try again later."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="border w-[95%] md:max-w-lg m-auto rounded-md bg-white p-8">
        <h1 className="font-bold text-yellow-500 bg-yellow-100 w-max px-4 py-2 rounded-md">
          IGNOU TEE DECEMBER 2023
        </h1>
        <h1 className="text-3xl font-bold  mt-10">
          Stay <span className="text-yellow-400">Updated.</span>
        </h1>
        <p className="text-gray-500 mt-3">
          "Subscribe to our result update service and receive your result
          updates directly in your mailbox."
        </p>
        {isSubscriptionSuccess ? (
          <h1 className="mt-4 text-green-600 font-bold">
            Thank you for subscribing! You'll be notified via email when your
            results are updated.
          </h1>
        ) : (
          <Form onSubscribeHandler={onSubscribeHandler} isLoading={isLoading} />
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
