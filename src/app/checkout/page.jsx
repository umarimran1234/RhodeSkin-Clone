"use client";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/authContaxt/authContxt";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Ring } from "react-css-spinners";
import Swal from "sweetalert2";
const Checkout = () => {
  const { cartItem, products } = useUser();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [country, setCountry] = useState();
  const [firstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const navigation = useRouter();
  const [apparTMent, setAppartMent] = useState();
  const [city, setcity] = useState();
  const [userID, setUserID] = useState(null);
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const [Phone, setPhone] = useState();
  const total = cartItem?.reduce((acc, item) => acc + item?.price, 0);
  let justMore = cartItem.filter((item) => item?.category === "Zalmar Hoodies");

  if (cartItem.some((item) => item?.productName === "Zalmar Hoodies")) {
    const tShirtProducts = products?.filter(
      (product) => product?.category === "T-SHIRT"
    );
    justMore = [...justMore, ...tShirtProducts];
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUUID = localStorage.getItem("uuid");
      if (storedUUID) {
        setUserID(storedUUID);
      } else {
        navigation.push("/account/login");
      }
    }
  }, [navigation]);
  console.log(userID, "userId");

  //   <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; line-height: 1.5;">
  //     <h2 style="color: #007BFF;">New Order Received</h2>
  //     <p><strong>Name:</strong> ${name}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //     <p><strong>Address:</strong> ${address}</p>
  //     <h3>Order Details:</h3>
  //     <table style="border-collapse: collapse; width: 100%; margin-top: 10px;">
  //       <thead>
  //         <tr>
  //           <th style="border: 1px solid #ddd; padding: 8px;">#</th>
  //           <th style="border: 1px solid #ddd; padding: 8px;">Product Name</th>
  //           <th style="border: 1px solid #ddd; padding: 8px;">Quantity</th>
  //           <th style="border: 1px solid #ddd; padding: 8px;">Color</th>
  //           <th style="border: 1px solid #ddd; padding: 8px;">Price</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         ${cartItem
  //           .map(
  //             (product, index) => `
  //             <tr>
  //               <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${
  //                 index + 1
  //               }</td>
  //               <td style="border: 1px solid #ddd; padding: 8px;">${
  //                 product.productName
  //               }</td>
  //               <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${
  //                 product.quantity
  //               }</td>
  //               <td style="border: 1px solid #ddd; padding: 8px;">${
  //                 product.color
  //               }</td>
  //               <td style="border: 1px solid #ddd; padding: 8px;">${
  //                 product.price
  //               } PKR</td>
  //                                <td style="border: 1px solid #ddd; padding: 8px;">
  //                                  <image src={ ${product?.imageUrl} } />
  //                                 PKR</td>
  //             </tr>
  //           `
  //           )
  //           .join("")}
  //       </tbody>
  //     </table>
  //     <p style="margin-top: 20px;">Thank you for your order!</p>
  //   </div>
  // `;
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedProducts = cartItem;

    const formData = {
      firstName,
      LastName,
      address,
      Phone,
      email,
      zip,
      state,
      products: apparTMent,
      country,
    };
    setLoading(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/88ede7a02c80556ad90184c7f6de85b2 ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Your order has been submitted successfully!",
          text: "thank you for choosing Zalmar",
          icon: "success",
          timer: 2000,
        }).then(() => navigation.push("/"));

        setLastName("");
        setAddress("");
        setAppartMent("");
        setCountry("");
        setEmail("");
        setPhone("");
        setState("");
        setZip("");
        setcity("");
      } else {
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error please Check your Connections",
        icon: "error",
        timer: 2000,
      });
    }
    setLoading(false);
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen mt-20 py-10 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <div className="text-center">
              <Link href="/" className="text-8xl">
                <span className="font-medium">zal</span>
                <span className="font-light">mar</span>
              </Link>
              <nav className="text-sm text-gray-600 my-6">
                <span>Cart</span> &gt; <span>Information</span> &gt;{" "}
                <span>Shipping</span> &gt; <span>Payment</span>
              </nav>
            </div>
            <h2 className="text-lg text-center font-medium mb-4">
              Express checkout
            </h2>
            {/* <div className="flex space-x-4 mb-8">
              <button className="w-full py-1 flex justify-center bg-indigo-600 text-white font-medium rounded">
                <Image
                  src={"/ShopPay.svg"}
                  width={200}
                  height={200}
                  alt="Shop Pay svg"
                  className="md:w-[100px] w-[70px] h-[48px]"
                ></Image>
              </button>
              <button className="w-full py-1 flex justify-center items-center bg-yellow-400 text-black font-medium rounded">
                <Image
                  src={"/Paypal.svg"}
                  width={200}
                  height={200}
                  alt="Shop Pay svg"
                  className="md:w-[100px] w-[70px] h-[48px]"
                ></Image>
              </button>
              <button className="w-full py-1 flex justify-center items-center bg-black text-white font-medium rounded">
                <Image
                  src={"/GPay.png"}
                  width={200}
                  height={200}
                  alt="Shop Pay svg"
                  className="md:w-[100px] w-[70px] h-[35px]"
                ></Image>
              </button>
            </div> */}
            {/* <div className="text-center text-gray-500 mb-6">OR</div> */}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Contact</h3>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
                />
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="news" />
                  <label htmlFor="news" className="text-sm text-gray-600">
                    Email me with news and offers
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Shipping address</h3>
                <div className="mb-4">
                  <select
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    defaultValue="United States"
                  >
                    <option value={"pakistan"}>Pakistan</option>
                    <option value={"united states"}>United States</option>
                    <option value={"china"}>China</option>
                    <option value={"dubai"}>Dubai</option>
                  </select>
                </div>
                <input type="hidden" name="_cc" value="umartkd989@gmail.com," />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className="border border-gray-300 rounded px-4 py-2"
                  />
                  <input
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className="border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <input
                    onChange={(e) => setcity(e.target.value)}
                    type="text"
                    placeholder="City"
                    className="border border-gray-300 rounded px-4 py-2"
                  />
                  <input
                    type="text"
                    onChange={(e) => setState(e.target.value)}
                    placeholder="State"
                    className="border border-gray-300 rounded px-4 py-2"
                  />
                  <input
                    type="text"
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="ZIP code"
                    className="border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <input
                    type="text"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                  <span className="text-gray-400 text-sm">?</span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <input type="checkbox" id="text-news" />
                  <label htmlFor="text-news" className="text-sm text-gray-600">
                    Text me with news and offers (US & CA only)
                  </label>
                </div> */}
              </div>

              <div className="flex justify-between items-center">
                <Link href="/shop" className="text-sm text-gray-600">
                  Return to cart
                </Link>
                <button
                  type="submit"
                  className="bg-gray-800 text-white py-2   px-4 rounded"
                >
                  {loading === true ? (
                    <>
                      <svg
                        aria-hidden="true"
                        class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span> :
                    </>
                  ) : (
                    "Order Now"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 shadow rounded">
            <div className="flex justify-start flex-col  items-start mb-6">
              {cartItem &&
                cartItem.map((item, index) => (
                  <>
                    <div key={index} className="w-full">
                      <p className="text-sm text-gray-700">
                        {item?.productName}
                      </p>
                      <p className="text-xs text-gray-500">
                        ({item?.quantity})
                      </p>
                    </div>
                    <p className="text-sm text-gray-700"> RS {item?.price}</p>
                  </>
                ))}
            </div>

            {/* <div className="flex md:flex-row flex-col md:gap-0 gap-4 items-center space-x-4 mb-6">
              <input
                type="text"
                placeholder="Discount code or gift card"
                className="flex-grow border border-gray-300 rounded px-4 py-2"
              />
              <button className="bg-gray-800 text-white py-2 px-4 rounded">
                Apply
              </button>
            </div> */}

            <div className="mb-6">
              {/* <div className="flex justify-between text-sm text-gray-700">
                <p>Subtotal</p>
                <p>$30.00</p>
              </div> */}
              {/* <div className="flex justify-between text-sm text-gray-500">
                <p>Shipping</p>
                <p>Calculated at next step</p>
              </div> */}
            </div>

            <div className="flex justify-between text-lg font-medium mb-6">
              <p>Total</p>
              <p>{total}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Just one more thing</h3>
              {justMore &&
                justMore?.map((item, index) => (
                  <>
                    <div className="border border-gray-300 rounded p-4 mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-700">{item?.name}</p>
                          <p className="text-sm text-gray-700">
                            RS {item?.price}
                          </p>
                        </div>
                        <Image src={item?.image} height={30} width={30} />
                      </div>
                    </div>
                  </>
                ))}
              {/* <div className="border border-gray-300 rounded p-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700">barrier restore cream</p>
                  <p className="text-sm text-gray-700">$32.00</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
