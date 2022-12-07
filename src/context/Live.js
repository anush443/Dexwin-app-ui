import React, { createContext, useEffect, useState } from "react";
import { getAPI } from "src/services/ApiCall";

export const LiveContext = createContext();

export default function LiveProvider(props) {
    
    const [liveGameData, setLiveGameData] = useState([]);

    const getLiveMatchesData = async () => {
        try {
            const endPoint = "todayLiveGamesAPI";
            const response = await getAPI(endPoint);
            var arr = [];
            if (response.status == "success") {
                setLiveGameData(response.Data);
            } else {
                setLiveGameData([]);
            }
        } catch (error) {
            setLiveGameData([]);
        }
    };

    useEffect(() => {
        if(liveGameData.length == 0){
            getLiveMatchesData();
        }
    }, []);

    var data = {
        matches : liveGameData
    };

    return (
        <LiveContext.Provider value={data}>{props.children}</LiveContext.Provider>
    );
}
