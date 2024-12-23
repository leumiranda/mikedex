const express = require("express");
const router = express.Router();

const userRoute = require("./userRoute");
const orderRoute = require("./orderRoute");
const paymentRoute = require("./paymentRoute");
const productRoute = require("./productRoute");
const leandroRoute = require("./leandroRoute");

router.use("/user", userRoute);
router.use("/order", orderRoute);
router.use("/payment", paymentRoute);
router.use("/product", productRoute);

// Adicionar a rota personalizada para o teste
router.use("/", leandroRoute);

module.exports = router;
