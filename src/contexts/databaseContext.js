import React from "react";

// utilities
import { databases } from "../utilities/databases";

// function to get queried results
export const getQueryResult = (query) => {
    switch (query.query.trim().toLowerCase()) {
        case "select * from customer;":
            if (query.dbName === "database2") return "> Only showing results for database1.";
            return databases.database1.customer;
        case "select * from product;":
            if (query.dbName === "database2") return "> Only showing results for database1.";
            return databases.database1.product;
        case "select * from customer where country = 'mexico';":
            if (query.dbName === "database2") return "> Only showing results for database1.";
            let newData = databases.database1.customer.filter(
                (cus) => cus.country.toLowerCase() === "mexico"
            );
            return newData;
        default:
            return "> Please run a single query at a time to see the result.";
    }
};

// creating context
export const DatabaseContext = React.createContext();
