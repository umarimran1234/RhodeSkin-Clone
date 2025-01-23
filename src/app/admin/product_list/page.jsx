"use client";
import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";

import { app } from "@/Config/firebaseConfig";
import axios from "axios";
import ZMLoader from "./Components/Spinner";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteDoc, updateDoc } from "firebase/firestore";
import Image from "next/image";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    image: null,
    price: "",
    oldprice: "",
    isActive: true,
    isSaleOut: false,
    category: "",
    colorImages: [],
  });
  // const updateImage = () => {
  //   uploadImageToImageBB(selectedProduct?.image);
  // };
  const handleUpdate = async () => {
    setLoading(true);
    try {
      const productRef = doc(db, "products", selectedProduct?.id);
      await updateDoc(productRef, {
        name: selectedProduct?.name,
        price: parseFloat(selectedProduct?.price),
        isActive: selectedProduct?.isActive,
        isSaleOut: selectedProduct?.isSaleOut,
      });

      alert("Product updated successfully!");
      closeModal();
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again.");
    }
    setLoading(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const openModal = (seletedProduct) => {
    setIsModalOpen(true);

    setSelectedProduct(seletedProduct);

    console.log(selectedProduct);
  };
  const closeModal = () => setIsModalOpen(false);
  const deleteImage = async () => {
    const deleteUrl = newProduct?.imageCredendials?.data?.delete_url; // Response me diya hua URL
    setNewProduct({
      ...newProduct,
      image: null,
    });
  };

  const deleteProduct = async (productId) => {
    setLoading(true);
    try {
      const productDocRef = doc(db, "products", productId);
      await deleteDoc(productDocRef);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
    setLoading(false);
  };
  const [loading, setLoading] = useState(false);

  const handleDelete = (productId) => {
    deleteProduct(productId);
  };
  const db = getFirestore(app);
  // console.log(products, "product");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const fetchedProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(fetchedProducts);
    });

    return () => unsubscribe();
  }, [db]);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "image") {
      // If the field is for front image
      const selectedImg = files[0];
      if (selectedImg) {
        // Upload the front image
        uploadImageToImageBB(selectedImg, "front");
      }
    } else if (name === "colorImages") {
      // If the field is for color images (multiple images)
      const selectedImages = Array.from(files);
      selectedImages.forEach((img) => uploadImageToImageBB(img, "color"));
    } else {
      // Handle all other fields (e.g., name, price, etc.)
      setNewProduct({
        ...newProduct,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const uploadImageToImageBB = async (selectedImg, type = "front") => {
    const formData = new FormData();
    formData.append("image", selectedImg);
    // console.log(formData);

    const ConfigAxios = axios.create({
      http2: false,
    });

    try {
      // setLoading(true);
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=f345734a6e366f61b9ff5e1fb4a21939",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        const data = await response.json();
        // setUploadResponse(data);
        if (type === "front") {
          setNewProduct({
            ...newProduct,
            image: data?.data?.display_url,
          });
        } else if (type === "color") {
          // Add color-specific image to the colorImages array
          setNewProduct({
            ...newProduct,
            colorImages: [...newProduct.colorImages, data?.data?.display_url], // Add to the array
          });
        }
      } else {
        console.error("Error: Image upload not successful", response);
        return null;

        // setImgURL(data?.data?.display_url);
      }
      // const response = await axios.post(
      //   "https://api.imgbb.com/1/upload",
      //   "zalmarLogo.JPG",
      //   {
      //     headers: {
      //       Authorization: "Client-ID  523b8b80835dab8", // Replace with your Imgur Client ID
      //     },
      //   }
      // );

      // Check if the response is successful
      if (response.status === 200) {
        // Get image URL from Imgur response
        // const
        //  = response?.data?.display_url;
        // console.log("Uploaded Image URL:", imageUrl);
        // return imageUrl;
      } else {
        console.error("Error: Imgur response not successful", response);
        return null;
      }
    } catch (error) {
      // More detailed error logging
      console.error(
        "Error uploading image:",
        error.response ? error.response.data : error.message
      );

      return null;
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!newProduct.image) {
      alert("Please upload an image.");
      return;
    }

    // const clientSecreteKey = "3a0e8d82af00f363dc9caf175b16429b6fe60bb8";
    setLoading(true);
    try {
      await addDoc(collection(db, "products"), {
        name: newProduct?.name,
        image: newProduct?.image,
        price: parseFloat(newProduct.price),
        isActive: newProduct?.isActive,
        isSaleOut: newProduct?.isSaleOut,
        category: newProduct?.category,
        oldPrice: newProduct?.oldprice,
        colorImages: newProduct?.colorImages,
      });

      setNewProduct({
        name: "",
        // image: null,
        price: "",
        oldprice: "",
        isActive: true,
        isSaleOut: false,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      {loading === true ? (
        <ZMLoader />
      ) : (
        <div className="p-6 bg-gray-100 h-full">
          {/* Heading */}

          <h1 className="text-3xl font-bold text-center mb-8">Admin Panel</h1>

          {/* Add Product Form */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block font-medium mb-2">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Select category
                </label>
                <select
                  name="name"
                  value={newProduct?.category}
                  onChange={(e) => {
                    setNewProduct({ ...newProduct, category: e.target.value });
                  }}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="HOODIE">Hoodie</option>
                  <option value="T-SHIRT">T-shirt</option>
                  <option value="FULL-SLIP">Full Slip</option>
                  <option value="HALF-SLIP">Half Slip</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div>
                <label className="block font-medium mb-2"> Front Image </label>
                {newProduct?.image !== null ? (
                  <>
                    <div className="flex  justify-start items-start">
                      <Image
                        width={200}
                        height={200}
                        className="mb-2  rounded-full  "
                        alt="product image"
                        src={newProduct?.image || null}
                      />

                      <MdDelete
                        onClick={deleteImage}
                        color="red"
                        size={30}
                        cursor={"pointer"}
                        className=" hover:text-red-400 "
                      />
                    </div>
                  </>
                ) : (
                  <input
                    type="file"
                    name="image"
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>
              <div>
                <label className="block font-medium mb-2">Another Images</label>

                <>
                  <div className="flex  justify-start items-start">
                    {newProduct?.colorImages?.map((img, index) => (
                      <div key={index}>
                        <Image
                          width={40}
                          height={40}
                          className="mb-2  rounded-full  "
                          alt="product image"
                          src={img || null}
                        />
                      </div>
                    ))}

                    <MdDelete
                      onClick={deleteImage}
                      color="red"
                      size={30}
                      cursor={"pointer"}
                      className=" hover:text-red-400 "
                    />
                  </div>
                </>

                <input
                  type="file"
                  name="colorImages"
                  multiple
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Price</label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter price"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Old prices</label>
                <input
                  type="number"
                  name="oldprice"
                  value={newProduct.old}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter price"
                />
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <label className="block font-medium mb-2">Is Active</label>
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={newProduct.isActive}
                    onChange={handleInputChange}
                    className="h-5 w-5"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Is Sale Out</label>
                  <input
                    type="checkbox"
                    name="isSaleOut"
                    checked={newProduct.isSaleOut}
                    onChange={handleInputChange}
                    className="h-5 w-5"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
              >
                Add Product
              </button>
            </form>
          </div>

          {/* Product Table */}
          <div className="bg-white p-6 rounded-lg shadow-md overflow-scroll ">
            <h2 className="text-2xl font-semibold mb-4">Products List</h2>
            {loading === true ? (
              <ZMLoader />
            ) : (
              <>
                <table className="w-full border-collapse border overflow-hidden border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2">
                        Color images
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Image
                      </th>
                      <th className="border border-gray-300 px-4 py-2">Name</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Price
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Is Active
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Sale Out
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product?.id} className="text-center">
                        <td className="border md:flex-row flex-col flex md:overflow-auto overflow-scroll   border-gray-300 px-4 py-2">
                          {product.colorImages.map((img, index) => (
                            <img
                              src={img}
                              alt={product?.name}
                              className="w-16 h-16 object-cover mx-auto"
                            />
                          ))}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <img
                            src={product?.image}
                            alt={product?.name}
                            className="w-16 h-16 object-cover mx-auto"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {product?.name}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {product?.price}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {product?.isActive ? "Yes" : "No"}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {product?.isSaleOut ? "Yes" : "No"}
                        </td>
                        <td className="border items-center border-gray-300 px-4 py-2">
                          <div className="flex justify-center items-center gap-6 ">
                            <MdDelete
                              onClick={() => handleDelete(product?.id)}
                              color="blue"
                              size={20}
                              cursor={"pointer"}
                              className=" hover:bg-blue-200 rounded-sm  "
                            />
                            {/* <UpdateProductModal
                              isOpen={isModalOpen}
                              onClose={closeModal}
                              productId={product?.id}
                              existingData={selectedProduct}
                            /> */}
                            <MdEdit
                              color="blue"
                              size={20}
                              onClick={() => {
                                openModal(product);
                              }}
                              cursor={"pointer"}
                              className=" hover:bg-blue-200 rounded-sm  "
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                    {products.length === 0 && (
                      <tr>
                        <td
                          colSpan="5"
                          className="text-center text-gray-500 py-4 border border-gray-300"
                        >
                          No products added yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      )}
      {isModalOpen === true ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <Image
              className="mb-3"
              width={100}
              height={100}
              src={selectedProduct?.image}
            />
            <input
              type="file"
              onChange={(e) => {
                setSelectedProduct({
                  ...selectedProduct,
                  image: e.target.files[0],
                });
              }}
            />
            <h2 className="text-xl font-semibold mb-4">Update Product</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                value={selectedProduct?.name}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    name: e.target.value,
                  })
                }
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter product name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                value={selectedProduct?.price}
                onChange={(e) => {
                  setSelectedProduct({
                    ...selectedProduct,
                    price: e.target.value,
                  });
                }}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter price"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                old price
              </label>
              <input
                type="number"
                value={selectedProduct?.oldprice}
                onChange={(e) => {
                  setSelectedProduct({
                    ...selectedProduct,
                    oldprice: e.target.value,
                  });
                }}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter price"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedProduct?.isActive}
                  onChange={(e) => {
                    setSelectedProduct({
                      ...selectedProduct,
                      isActive: e.target.checked,
                    });
                  }}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500"
                />
                <span>Is Active</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedProduct?.isSaleOut}
                  onChange={(e) => {
                    setSelectedProduct({
                      ...selectedProduct,
                      isSaleOut: e.target.checked,
                    });
                  }}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500"
                />
                <span>Is Sale Out</span>
              </label>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      ;
    </>
  );
};

export default AdminPanel;
