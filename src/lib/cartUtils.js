// utils/cartUtils.js
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/Config/firebaseConfig";

/**
 * Add a product to the user's cart in Firestore, along with address and color
 * @param {string} userid - The current authenticated user
 * @param {string} productId - The ID of the product
 * @param {string} productName - The name of the product
 * @param {number} price - The price of the product
 * @param {number} quantity - The quantity to add
 * @param {string} imageUrl - The URL of the product image
 * @param {string} color - The selected color of the product
 * @returns {Promise<void>}
 */
export const addToCart = async (
  userid,
  productId,
  productName,
  price,
  quantity,
  imageUrl,
  color
) => {
  if (!userid) {
    throw new Error("User is not signed in");
  }

  try {
    const cartRef = doc(collection(db, "users", userid, "cart"), productId);

    // Save product details in Firestore and preserve existing data with merge: true
    await setDoc(
      cartRef,
      {
        productName,
        price,
        quantity,
        imageUrl,
        color,
      },
      { merge: true }
    );

    console.log("Product successfully added to cart");
  } catch (error) {
    console.error("Error adding product to cart:", error.message);
  }
};
