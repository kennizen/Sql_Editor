import React from "react";
import LeftBar from "./components/leftSide/LeftBar";
import MiddleSection from "./components/middleSection/MiddleSection";
import TopBar from "./components/topBar/TopBar";

function App() {
    return (
        <div className="h-screen flex">
            <LeftBar />
            <div className="flex flex-col w-full">
                <TopBar />
                <MiddleSection />
            </div>
        </div>
    );
}

export default App;
