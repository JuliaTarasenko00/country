import { Hourglass } from "react-loader-spinner";

const Loader = () => {
  return (
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{
        position: "absolute",
        top: "50vh",
        left: "47%",
        zIndex: "200",
      }}
      wrapperClass=""
      colors={["#306cce", "#72a1ed"]}
    />
  );
};

export default Loader;
