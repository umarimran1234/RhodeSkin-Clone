import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, address, phone, products } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "storezalmar@gmail.com",
        pass: "zalmar1234store",
      },
    });

    // Email options
    const mailOptions = {
      from: "storezalmar@gmail.com",
      to: "storezalmar@gmail.com",
      subject: "New Order Received",
      html: `
        <h2>New Order Details</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Products Ordered:</strong></p>
        <ul>
          ${products
            .map(
              (product) =>
                `<li>${product?.productName} - Quantity: ${product?.quantity} - Price: ${product?.price} PKR</li>`
            )
            .join("")}
        </ul>
      `,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Order received and email sent!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send order email." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
