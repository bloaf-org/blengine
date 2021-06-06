import React, {useEffect} from "react";

import bl from "./index";

const AppContainer : React.FC<any> = () => {

    // Add the THREE canvas to the DOM 
    useEffect(() => {
        if (bl !== undefined) {
            const element : any = document.getElementById("placeholder");

            if (element !== null) {
                element.parentNode.replaceChild(bl.renderer.domElement, element);
            }
        }
    });


    // perform any resizing operations
    // TODO: Work out a general soln to custom sized container(s)
    function updateSize() {
        
        let width : number = window.innerWidth; //ref.current.offsetWidth;
        let height : number = window.innerHeight; //ref.current.offsetHeight;

        if (bl !== undefined) {
            bl.camera.aspect = width / height;
            bl.camera.updateProjectionMatrix();

            const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
            bl.renderer.setPixelRatio(DPR);
            bl.renderer.setSize( width, height );
        }

    }

    // listen to screen resize
    useEffect(() => {
      
        window.addEventListener('resize', updateSize);
        updateSize();
    
        return () => window.removeEventListener('resize', updateSize);
        
    });


    return(
        <div id="placeholder"></div>
    );
}

export default AppContainer;
