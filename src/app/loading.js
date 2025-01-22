import { Ellipsis } from "react-css-spinners";

function loading() {
  return (
    <>
      <div className=" flex justify-center ">
        <Ellipsis size={300} color="black" />
      </div>
    </>
  );
}
export default loading;
