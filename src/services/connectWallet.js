// import apiConfig from "src/connectors/config/ApiConfig";
import axios from "axios";

export const connectWalletAddress = async (address, ref) => {
  const response = await axios
    .post(
      `http://localhost:3023//api/user/connect-wallet?walletAddress=${address}`,
      { body: { id: ref, ethAddress: address } }
    )
    .then((_res) => console.log("Connect Successful"))
    .catch((error) => console.log("Error: ", error));

  if (response && response) {
    console.log(response);
    console.log(response.data);
  }
};
