import bl from "../index";

export default function initMouseListener(canvas : HTMLCanvasElement) {

    document.addEventListener("mousedown", (evt : MouseEvent) => {
        if ( document.pointerLockElement === canvas ) {
            if (evt.button === 0) {
                window.controls.mouse.left = true;
            } else {
                window.controls.mouse.right = true;
            }
        } else {
            canvas.requestPointerLock();
        }
    });

    document.addEventListener("mouseup", (evt : MouseEvent) => {
        if ( document.pointerLockElement === canvas ) {
            if (evt.button === 0) {
                window.controls.mouse.left = false;
            } else {
                window.controls.mouse.right = false;
            }
        } else {
            
            canvas.requestPointerLock();
        }
    });

    document.addEventListener( "mousemove" , (evt : MouseEvent) => {

        if (document.pointerLockElement === canvas) {
            if (!window.controls.mouse.isPointerLock) {
                window.controls.mouse.pos.x = evt.clientX;
                window.controls.mouse.pos.y = evt.clientY;
                window.controls.mouse.isPointerLock = true;
            } else {
                window.controls.mouse.delta.x = evt.movementX;
                window.controls.mouse.delta.y = evt.movementY;
            }
            
        } else {
            canvas.requestPointerLock();
            if (window.controls.mouse.isPointerLock) {
                window.controls.mouse.isPointerLock = false;
            }
        }
        
    });

}
