import React, { Fragment, useState, useEffect, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";

// import { BsShieldFillCheck } from "react-icons/bs";
// import { BiSearchAlt } from "react-icons/bi";
// import { RiHeart2Fill } from "react-icons/ri";

const dummyData = [
  {
    id: "97412378923",
    clientName: "Microsoft Corporation",
    createdDate: "14 Jan 2022",
    dueDate: "01 Feb 2022",
    amount: "$15,792",
    status: false,
    imgSrcs: [
      "https://i.imgur.com/A8fwLPY.jpeg",
      "https://i.imgur.com/bssObv8.jpeg",
      "https://i.imgur.com/L67URTC.jpeg",
    ],
  },
  {
    id: "97412378924",
    clientName: "Tesla Inc.",
    createdDate: "14 Jan 2022",
    dueDate: "01 Feb 2022",
    amount: "$275",
    status: false,
    imgSrcs: [
      "https://i.imgur.com/L67URTC.jpeg",
      "https://i.imgur.com/lq16BS8.jpeg",
      "https://i.imgur.com/Y18krry.jpeg",
      "https://i.imgur.com/PlXpa9H.jpeg",
    ],
  },
  {
    id: "97412378925",
    clientName: "Coca Cola co.",
    createdDate: "14 Jan 2022",
    dueDate: "01 Feb 2022",
    amount: "$8,950,500",
    status: false,
    imgSrcs: [
      "https://i.imgur.com/L67URTC.jpeg",
      "https://i.imgur.com/lq16BS8.jpeg",
      "https://i.imgur.com/Y18krry.jpeg",
      "https://i.imgur.com/PlXpa9H.jpeg",
    ],
  },
  {
    id: "97412378926",
    clientName: "Nvidia Corporation",
    createdDate: "14 Jan 2022",
    dueDate: "01 Feb 2022",
    amount: "$98,218",
    status: false,
    imgSrcs: [
      "https://i.imgur.com/L67URTC.jpeg",
      "https://i.imgur.com/lq16BS8.jpeg",
      "https://i.imgur.com/Y18krry.jpeg",
      "https://i.imgur.com/PlXpa9H.jpeg",
    ],
  },
];

const EvidenceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-gray-500 border-none text-sm white-glassmorphism"
  />
);

const Evidences = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState({});
  const [invoiceData, setInvoiceData] = useState(dummyData);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (invoice) => {
    setCurrentInvoice(invoice);
    setIsOpen(true);
  };

  const approve = (id) => {
    const tempInvoiceData = invoiceData;
    const index = tempInvoiceData.map((data) => data.id).indexOf(id);
    tempInvoiceData[index].status = true;
    console.log(tempInvoiceData[index].status);
  };
  const reject = (id) => {
    const tempInvoiceData = invoiceData;
    const index = tempInvoiceData.map((data) => data.id).indexOf(id);
    tempInvoiceData[index].status = true;
    tempInvoiceData[index].isRejected = true;
  };
  useEffect(() => {}, [invoiceData]);

  return (
    <div
      className={`flex flex-col w-full pt-36 pr-10 gradient-bg-services overflow-hidden ${props.className}`}
    >
      <div className="container p-2 mx-5 sm:p-4 text-slate-100 bg-slate-800 rounded-2xl">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Хүсэлтүүд</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="dark:bg-coolGray-700">
              <tr className="text-left">
                <th className="p-3">Invoice #</th>
                <th className="p-3">Client</th>
                <th className="p-3">Issued</th>
                <th className="p-3">Due</th>
                <th className="p-3 text-right">Amount</th>
                <th className="p-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((invoice) => {
                return (
                  <tr
                    key={`invoice-${invoice.id}`}
                    className="border-b border-opacity-20 dark:border-coolGray-700 dark:bg-coolGray-900"
                  >
                    <td className="p-3">
                      <p>{invoice.id}</p>
                    </td>
                    <td className="p-3">
                      <p>{invoice.clientName}</p>
                    </td>
                    <td className="p-3">
                      <p>{invoice.createdDate}</p>
                      <p className="dark:text-coolGray-400">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>{invoice.dueDate} </p>
                      <p className="dark:text-coolGray-400">Tuesday</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>{invoice.amount} </p>
                    </td>
                    <td className="p-3 text-right">
                      {invoice.status ? (
                        invoice.isRejected ? (
                          <span className="px-5 py-1 font-semibold rounded-md bg-red-800 text-slate-100">
                            Rejected
                          </span>
                        ) : (
                          <span className="px-5 py-1 font-semibold rounded-md bg-green-800 text-slate-100">
                            Done
                          </span>
                        )
                      ) : (
                        <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-slate-900">
                          <button
                            onClick={() => openModal(invoice)}
                            className="font-semibold"
                          >
                            Pending
                          </button>
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {isOpen && (
        <MyModal
          isOpen={isOpen}
          closeModal={closeModal}
          openModal={openModal}
          currentInvoice={currentInvoice}
          approve={approve}
          reject={reject}
        />
      )}
    </div>
  );
};

const MyModal = (props) => {
  const data = props.currentInvoice;
  const handleClose = () => {
    props.reject(data?.id);
    props.closeModal();
  };
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction()
      .then(() => {
        props.approve(data?.id);
        props.closeModal();
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={props.openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {props.currentInvoice.id}
        </button>
      </div> */}

      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={props.closeModal}
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
              <div className="inline-block w-full max-w-5xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 mb-5"
                >
                  {data.id} <br />
                  {data?.clientName} - {data.amount}
                </Dialog.Title>
                <div className="flex gap-3">
                  <div className="mt-2 border-r border-gray-400 pr-10">
                    <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4">
                      <img
                        src="https://i.imgur.com/L67URTC.jpeg"
                        alt=""
                        className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-coolGray-500 aspect-square"
                      />
                      <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                        src="https://i.imgur.com/L67URTC.jpeg"
                      />
                      <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                        src="https://i.imgur.com/lq16BS8.jpeg"
                      />
                      <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                        src="https://i.imgur.com/lq16BS8.jpeg"
                      />
                      <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                        src="https://i.imgur.com/Y18krry.jpeg"
                      />
                      <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                        src="https://i.imgur.com/Y18krry.jpeg"
                      />
                      <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                        src="https://i.imgur.com/PlXpa9H.jpeg"
                      />
                      <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                        src="https://i.imgur.com/PlXpa9H.jpeg"
                      />
                      <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square"
                        src="https://i.imgur.com/PlXpa9H.jpeg"
                      />
                      <img
                        src="https://i.imgur.com/PlXpa9H.jpeg"
                        alt=""
                        className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-coolGray-500 aspect-square"
                      />
                    </div>
                  </div>
                  {currentAccount ? (
                    <div className="mt-auto h-96 p-5 sm:w-5/6 w-full flex flex-col justify-between items-center rounded-lg">
                      <Input
                        placeholder="Address To"
                        name="addressTo"
                        type="text"
                        handleChange={handleChange}
                      />
                      <Input
                        placeholder="Amount (ETH)"
                        name="amount"
                        type="number"
                        handleChange={handleChange}
                      />
                      <Input
                        placeholder="Keyword (Gif)"
                        name="keyword"
                        type="text"
                        handleChange={handleChange}
                      />
                      <Input
                        placeholder="Enter Message"
                        name="message"
                        type="text"
                        handleChange={handleChange}
                      />

                      <div className="h-[1px] w-full bg-gray-400 my-2" />

                      {isLoading ? (
                        <Loader style="h-32 w-32 borde-red-700" />
                      ) : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="inline-flex justify-center px-4 py-2 text-sm font-semibold text-white bg-green-600 border border-transparent rounded-md hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        >
                          Approve
                        </button>
                      )}
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={connectWallet}
                      className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    >
                      <AiFillPlayCircle className="text-white mr-2" />
                      <p className="text-white text-base font-semibold">
                        Connect Wallet
                      </p>
                    </button>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-semibold text-white bg-red-700 border border-transparent rounded-md hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={handleClose}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Evidences;
