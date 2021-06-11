import bl from "../index";

function GetKey(key : string) : boolean {
    return bl.controls.keys[key];
}

function GetKeyInteger(key : string) : number {
    return GetKey(key) ? 1 : -1;
}

function GetMouse() : THREE.Vector2 {
    return bl.controls.mouse.delta;
}

function IsPointerLock() : boolean {
    return bl.controls.mouse.isPointerLock;
}

export {
    GetKey,
    GetKeyInteger,
    GetMouse,
    IsPointerLock
}
