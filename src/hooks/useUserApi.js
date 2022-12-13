import { useState } from "react";
import axios from "axios";

// let baseurl= process.env.BASE_URL
let baseurl="https://staging.dexwin.bet/betapi";
// let baseurl="http://localhost:3023";

const useUserApi = () => {
  const [refData, setRefData] = useState();

  const getReferalInfo = async (address) => {
    console.log(address,'address');
    const response = await axios
    .get(`${baseurl}/api/user/referral?&walletAddress=${address}`)
    .then(res => {
        console.log('Connect Successful', res)
        if(res?.data) setRefData(res.data.data)
        
    })
    .catch((error) => console.log('Error: ', error));

    console.log('response',response);
  }

  return ({
        refData,
        getReferalInfo
    });
};

export default useUserApi;