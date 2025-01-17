// src/app/api/upload/route.js
import axios from "axios";
import FormData from "form-data";

export async function POST(req) {
  try {
    const formData = new FormData();
    const { image } = await req.json(); // Assuming frontend is sending image in JSON
    console.log(image, "image 2");

    formData.append("image", image);

    const response = await axios.post(
      "https://api.imgur.com/3/image",
      formData,
      {
        headers: {
          Authorization: "Client-ID 3a1d86b8dd72bc0", // Replace with your actual Client-ID
        },
      }
    );

    if (response.status === 200) {
      return new Response(
        JSON.stringify({ success: true, url: response.data.data.link }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, error: response.data }),
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
