import React, {useEffect} from "react";

import bl from "./index";

const AppContainer = () => {

    useEffect(() => {
        if (bl !== undefined) {
            console.log("cash money");
            const element : any = document.getElementById("placeholder");

            if (element !== null) {
                element.parentNode.replaceChild(bl.renderer.domElement, element);
            }
        } else {
            console.log("yoyoyoyyo");
        }
    });

    return(
        <div id="placeholder"></div>
    );
}

export default AppContainer;
