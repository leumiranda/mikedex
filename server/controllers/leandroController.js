const axios = require("axios");

exports.fetchSmartContractInfo = async (req, res) => {
  try {
    console.log("Iniciando requisição ao Etherscan...");
    const contractAddress = process.env.SMART_CONTRACT_ADDRESS;
    const apiKey = process.env.ETHERSCAN_API_KEY;

    console.log("Endereço do contrato:", contractAddress);
    console.log("Chave da API:", apiKey);

    const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`;
    console.log("URL da requisição:", url);

    const response = await axios.get(url);

    console.log("Resposta da API:", response.data);

    if (response.data.status !== "1") {
      throw new Error("Não foi possível obter o ABI do contrato.");
    }

    const abi = JSON.parse(response.data.result);
    console.log("ABI obtido:", abi);

    res.status(200).json({
      message: "ABI obtido com sucesso",
      abi,
    });
  } catch (error) {
    console.error("Erro ao buscar informações do contrato:", error.message);
    res.status(500).json({
      error: "Erro ao buscar informações do contrato.",
    });
  }
};
