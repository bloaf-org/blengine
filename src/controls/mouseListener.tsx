import bl from "../index";

export default function initMouseListener(canvas : HTMLCanvasElement) {

    document.addEventListener("mousedown", (evt : MouseEvent) => {
        if ( document.pointerLockElement === canvas ) {
            if (evt.button === 0) {
                bl.controls.mouse.left = true;
            } else {
                bl.controls.mouse.right = true;
            }
        } else {
            canvas.requestPointerLock();
        }
    });

    document.addEventListener("mouseup", (evt : MouseEvent) => {
        if ( document.pointerLockElement === canvas ) {
            if (evt.button === 0) {
                bl.controls.mouse.left = false;
            } else {
                bl.controls.mouse.right = false;
            }
        } else {
            
            canvas.requestPointerLock();
        }
    });

    document.addEventListener( "mousemove" , (evt : MouseEvent) => {

        if (document.pointerLockElement === canvas) {
            if (!bl.controls.mouse.isPointerLock) {
                bl.controls.mouse.pos.x = evt.clientX;
                bl.controls.mouse.pos.y = evt.clientY;
                bl.controls.mouse.isPointerLock = true;
            } else {
                bl.controls.mouse.delta.x = evt.movementX;
                bl.controls.mouse.delta.y = evt.movementY;
            }
            
        } else {
            canvas.requestPointerLock();
            if (bl.controls.mouse.isPointerLock) {
                bl.controls.mouse.isPointerLock = false;
            }
        }
        
    });

}
