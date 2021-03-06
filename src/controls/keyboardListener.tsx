
const keyChangeHandler = (evt : KeyboardEvent) => {
    let toggle : boolean = evt.type === "keydown" ? true : false;
    window.controls.keys[evt.key] = toggle;

};

export default function initKeyboardListener() {
    document.addEventListener('keydown', (evt : KeyboardEvent) => keyChangeHandler(evt));
    document.addEventListener('keyup', (evt : KeyboardEvent) => keyChangeHandler(evt));
}
