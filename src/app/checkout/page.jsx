import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-20 py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <div className="text-center">
            <Link href="/" className="text-8xl">
              <span className="">zal</span>
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

          <form>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Contact</h3>
              <input
                type="email"
                placeholder="Email"
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
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  defaultValue="United States"
                >
                  <option>Pakistan</option>
                  <option>United States</option>
                  <option>China</option>
                  <option>Dubai</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-gray-300 rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-gray-300 rounded px-4 py-2"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-300 rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="border border-gray-300 rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="border border-gray-300 rounded px-4 py-2"
                />
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <input
                  type="text"
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
              <Link href="#" className="text-sm text-gray-600">
                Return to cart
              </Link>
              <button className="bg-gray-800 text-white py-2 px-4 rounded">
                Continue to shipping
              </button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 shadow rounded">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm text-gray-700">pineapple refresh</p>
              <p className="text-xs text-gray-500">big (5 oz)</p>
            </div>
            <p className="text-sm text-gray-700">$30.00</p>
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
            <div className="flex justify-between text-sm text-gray-700">
              <p>Subtotal</p>
              <p>$30.00</p>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <p>Shipping</p>
              <p>Calculated at next step</p>
            </div>
          </div>

          <div className="flex justify-between text-lg font-medium mb-6">
            <p>Total</p>
            <p>USD $30.00</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Just one more thing</h3>
            <div className="border border-gray-300 rounded p-4 mb-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-700">glazing milk</p>
                <p className="text-sm text-gray-700">$32.00</p>
              </div>
              <p className="text-xs text-gray-500">big (4.7 oz)</p>
            </div>
            <div className="border border-gray-300 rounded p-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-700">barrier restore cream</p>
                <p className="text-sm text-gray-700">$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
