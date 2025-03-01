import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/Config/firebaseConfig";

const UpdateProductModal = ({ isOpen, onClose, productId, existingData }) => {
  const [name, setName] = useState(existingData?.name || "");
  const [price, setPrice] = useState(existingData?.price || 0);
  const [isActive, setIsActive] = useState(existingData?.isActive || false);
  const [isSaleOut, setIsSaleOut] = useState(existingData?.isSaleOut || false);
  const [image, setImage] = useState(existingData?.image);
  console.log(existingData, "existingData");

  const handleUpdate = async () => {
    try {
      const productRef = doc(db, "products", productId);
      await updateDoc(productRef, {
        name,
        price: parseFloat(price),
        isActive,
        isSaleOut,
      });
      alert("Product updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Update Product</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter price"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500"
            />
            <span>Is Active</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isSaleOut}
              onChange={(e) => setIsSaleOut(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500"
            />
            <span>Is Sale Out</span>
          </label>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
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
  );
};

export default UpdateProductModal;
