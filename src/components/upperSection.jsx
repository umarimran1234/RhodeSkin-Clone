import React from "react";

function UpperSection() {
  return (
    <>
      <div className=" container mx-auto mt-3 p-2 ">
        <div
          style={{ textTransform: "capitalize", background: "#f1f0ed" }}
          className="flex justify-center bg-gray-300 text-sm rounded-md p-2  "
        >
          <p
            style={{
              fontSize: " 12px  ",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            className="  font-bold   text-gray-600"
          >
            FREE US SHIPPING ON ORDERS OVER $45
          </p>
        </div>
      </div>
    </>
  );
}

export default UpperSection;
