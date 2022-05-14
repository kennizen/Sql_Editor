import React, { useState } from "react";
import LeftBar from "./components/leftSide/LeftBar";
import MiddleSection from "./components/middleSection/MiddleSection";
import TopBar from "./components/topBar/TopBar";

import { databases, DatabaseContext, getDatabase } from "./contexts/databases";

function App() {
    const [currentDb, setCurrentDb] = useState({ dbName: "database1", db: databases.database1 });

    return (
        <DatabaseContext.Provider value={{ databases, getDatabase, currentDb }}>
            <div className="h-screen flex overflow-hidden">
                <LeftBar />
                <div className="flex flex-col w-full">
                    <TopBar setCurrentDb={setCurrentDb} />
                    <MiddleSection />
                </div>
            </div>
        </DatabaseContext.Provider>
    );
}

export default App;
