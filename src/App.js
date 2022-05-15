import React, { useState } from "react";

// components
import LeftBar from "./components/leftSide/LeftBar";
import MiddleSection from "./components/middleSection/MiddleSection";
import TopBar from "./components/topBar/TopBar";

// contexts
import { DatabaseContext } from "./contexts/databaseContext";

// utilities
import { databases } from "./utilities/databases";

function App() {
    // states for currently selected database and executed query
    const [currentDb, setCurrentDb] = useState({ dbName: "database1", db: databases.database1 });
    const [query, setQuery] = useState({
        query: "",
        dbName: "",
    });
    const [toggleLeftBar, setToggleLeftBar] = useState(false);

    return (
        <DatabaseContext.Provider value={{ databases, currentDb, query, setQuery }}>
            <div className="h-screen flex overflow-hidden w-full">
                <LeftBar toggleLeftBar={toggleLeftBar} setToggleLeftBar={setToggleLeftBar} />
                <div className="flex flex-col md:w-full mmd:w-full lg:w-[calc(100%-256px)]">
                    <TopBar
                        setCurrentDb={setCurrentDb}
                        setToggleLeftBar={setToggleLeftBar}
                        toggleLeftBar={toggleLeftBar}
                    />
                    <MiddleSection />
                </div>
            </div>
        </DatabaseContext.Provider>
    );
}

export default App;
