
function GetKey(key : string) : boolean {
    return window.controls.keys[key];
}

function GetKeyInteger(key : string) : number {
    return GetKey(key) ? 1 : -1;
}

function GetMouse() : THREE.Vector2 {
    return window.controls.mouse.delta;
}

function IsPointerLock() : boolean {
    return window.controls.mouse.isPointerLock;
}

export {
    GetKey,
    GetKeyInteger,
    GetMouse,
    IsPointerLock
}
