import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const clientData = {
  email: "user@user.com",
  password: "password",
};

const watcherData = {
  email: "client@client.com",
  password: "password",
};

const LoginModal = ({ isOpen, openModal, closeModal }) => {
  // let [isOpen, setIsOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()
  // const formData = {}
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!formData.email || !formData.password) return;

    if (
      formData.password === clientData.password &&
      formData.email === clientData.email
    ) {
      setTimeout(() => {
        setIsLoading(false);
        navigate('dashboard')
        closeModal();
      }, 1500);

      return;
    } else if (
      formData.password === watcherData.password &&
      formData.email === watcherData.email
    ) {
      setTimeout(() => {
        setIsLoading(false);
        navigate('watcher')
        closeModal();
      }, 1500);

      return;
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    // const { addressTo, amount, keyword, message } = formData

    // if (!addressTo || !amount || !keyword || !message) return
  };

  const handleChange = (e) => {
    // console.log('event:', e, e.target.name, e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // useEffect(() => {}, [formData])
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 blue-glassmorphism opacity-90" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="bg-[#0d1a49] inline-block w-full max-w-md p-6 my-8 overflow-hidden 
                text-left align-middle transition-all transform bg shadow-xl rounded-2xl"
              >
                {/* <Dialog.Title>Нэвтрэх</Dialog.Title> */}
                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center">
                  {/* <Input
                    placeholder="Цахим шуудан"
                    name="email"
                    type="text"
                    handleChange={handleChange}
                  />
                  <Input
                    placeholder="Нууц үг"
                    name="password"
                    type="password"
                    handleChange={handleChange}
                  /> */}
                  <input
                    onChange={(e) => handleChange(e)}
                    className="
                    border-none focus:border-none focus:ring-0 outline-none
                    my-2 w-full rounded-sm p-2 bg-transparent white-glassmorphism
                    text-white text-sm"
                    placeholder="Цахим шуудан"
                    name="email"
                    type="text"
                  />
                  <input
                    onChange={(e) => handleChange(e)}
                    className="
                    border-none focus:border-none focus:ring-0 outline-none
                    my-2 w-full rounded-sm p-2 bg-transparent white-glassmorphism
                    text-white text-sm"
                    placeholder="Нууц үг"
                    name="password"
                    type="password"
                  />
                  <div className="h-[1px] w-full bg-gray-400 my-2" />
                </div>

                <div className="mt-4 px-4">
                  {isLoading ? (
                    <Loader style="border-white h-8 w-8" />
                  ) : (
                    <button
                      type="button"
                      className="w-full text-white bg-[#2952e3] py-2 rounded-full cursor-pointer 
                      hover:bg-[#2546bd]"
                      onClick={handleSubmit}
                    >
                      Нэвтрэх
                    </button>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoginModal;
