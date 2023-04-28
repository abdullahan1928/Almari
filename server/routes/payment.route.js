const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
    try {
        const { amount, id } = req.body;

        const payment = await stripe.checkout.sessions.create({
            amount: amount,
            currency: "USD",
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "USD",
                        product_data: {
                            name: "Total",
                        },
                        unit_amount: amount,
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/success/${id}`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: error.message,
        });
    }
});

module.exports = router;