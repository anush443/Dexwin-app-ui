// import apiConfig from "src/connectors/config/ApiConfig";
import axios from "axios";
// let baseurl= process.env.BASE_URL
let baseurl="https://staging.dexwin.bet/betapi";
// let baseurl="http://localhost:3023";

  export const connectWalletAddress = async (address, ref) => {
// console.log('BASE_URL',process.env.BASE_URL);

    const response = await axios
    .post(`${baseurl}/api/user/connect-wallet?walletAddress=${address}`,{body: {id: ref, ethAddress:address }})
    .then(_res => console.log('Connect Successful'))
    .catch((error) => console.log('Error: ', error));

    if (response && response) {
      console.log(response);
      console.log(response.data);
    }
  }




