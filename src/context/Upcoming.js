import React, { createContext, useEffect, useState } from "react";
import { getAPI } from "src/services/ApiCall";

export const UpcomingContext = createContext();

export default function UpcomingProvider(props) {
    
    const [upcomingGameData, setUpcomingGameData] = useState([]);

    const getUpcomingMatchesData = async () => {
        try {
            setUpcomingGameData([])
            const endPoint = "todayUpcomingGamesAPI";
            const response = await getAPI(endPoint);
            var arr = [];
            if (response.status == "success") {
                setUpcomingGameData(response.Data);
            } else {
                setUpcomingGameData([])
            }
        } catch (error) {
            setUpcomingGameData([])
        }
    };

    useEffect(() => {
        if(upcomingGameData.length == 0){
            getUpcomingMatchesData();
        }
    }, []);

    var data = {
        matches : upcomingGameData
    };

    return (
        <UpcomingContext.Provider value={data}>{props.children}</UpcomingContext.Provider>
    );
}
