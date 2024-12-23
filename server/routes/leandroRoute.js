const express = require("express");
const router = express.Router();
const { fetchSmartContractInfo } = require("../controllers/leandroController");

// Define a rota para buscar informações do contrato
router.get("/leandroapitest", fetchSmartContractInfo);

module.exports = router;
