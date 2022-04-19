import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Loader } from "../components";
const types = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

const UploadDnD = (props) => {
  const [selected, setSelected] = useState(types[0])
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file, index) => (
    <div key={`thumb-${index}`} className="mx-3">
      <img
        className="w-32 h-32 rounded-2xl border-2 border-gray-600 p-1 bg-slate-300"
        src={file.preview}
      />
    </div>
  ));

  const handleUpload = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(files);
    setTimeout(() => {
      setIsLoading(false);
      setFiles([]);
    }, 3000);
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const cleanup = async () => {
      await sleep(100);
      files.forEach((file) => URL.revokeObjectURL(file.preview));
      console.log("revoked");
    };
    cleanup();
  }, [files]);
  return (
    <section className="flex w-full justify-center items-center gradient-bg-services text-white">
      <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover">
        <div className="sm:max-w-lg w-full p-10 rounded-xl z-10">
          <div className="text-center">
            <h2 className="mt-5 text-3xl font-bold text-white">File Upload!</h2>
            <p className="mt-2 text-sm text-gray-400">
              Lorem ipsum is placeholder text.
            </p>
          </div>
          <form className="mt-8 space-y-3" onSubmit={handleUpload}>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Title
              </label>
              <div className="flex gap-3">{thumbs}</div>
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Attach Document
              </label>
              <div className="flex items-center justify-center w-full">
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                    <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              <span>File type: types of images</span>
            </p>
            <div>
              {isLoading ? (
                <Loader style="border-white h-16 w-16" />
              ) : (
                <button
                  type="submit"
                  className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Upload
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UploadDnD;
