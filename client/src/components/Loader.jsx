const Loader = (props) => (
  <div className="flex justify-center items-center py-3">
    <div className={`animate-spin rounded-full border-b-2 ${props.style}`} />
  </div>
);

export default Loader;
