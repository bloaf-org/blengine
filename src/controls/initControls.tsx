import initMouseListener from "./mouseListener";
import initKeyboardListener from "./keyboardListener";
import * as THREE from "three";
import bl from "../index";

// stops you from using a key 
// which isn't set up + adds nice autocomplete
export interface Controls {
    mouse: {
        left: boolean;
        right: boolean;
        pos: THREE.Vector2;
        delta: THREE.Vector2;
        isPointerLock: boolean;
    },
    keys: {
        " ": boolean; // spacebar
        "`": boolean;
        "Shift": boolean;
        "Control": boolean;
        "Alt": boolean;
        "F1": boolean;
        "F2": boolean;
        "F3": boolean;
        "F4": boolean;
        "F5": boolean;
        "F6": boolean;
        "F7": boolean;
        "F8": boolean;
        "1": boolean;
        "2": boolean;
        "3": boolean;
        "4": boolean;
        "5": boolean;
        "6": boolean;
        "7": boolean;
        "8": boolean;
        "9": boolean;
        "10": boolean;
        "q": boolean;
        "w": boolean;
        "e": boolean;
        "r": boolean;
        "t": boolean;
        "y": boolean;
        "u": boolean;
        "i": boolean;
        "o": boolean;
        "p": boolean;
        "a": boolean;
        "s": boolean;
        "d": boolean;
        "f": boolean;
        "g": boolean;
        "h": boolean;
        "j": boolean;
        "k": boolean;
        "l": boolean;
        "z": boolean;
        "x": boolean;
        "c": boolean;
        "v": boolean;
        "b": boolean;
        "n": boolean;
        "m": boolean;
    }
}



export default function initControls(canvas : HTMLCanvasElement) {

    const controls : Controls = {
        mouse: {
            left: false,
            right: false,
            pos: new THREE.Vector2(),
            delta: new THREE.Vector2(),
            isPointerLock: false
        },
        keys: {
            " ": false,
            "`": false,
            "Shift": false,
            "Control": false,
            "Alt": false,
            "F1": false,
            "F2": false,
            "F3": false,
            "F4": false,
            "F5": false,
            "F6": false,
            "F7": false,
            "F8": false,
            "1": false,
            "2": false,
            "3": false,
            "4": false,
            "5": false,
            "6": false,
            "7": false,
            "8": false,
            "9": false,
            "10": false,
            "q": false,
            "w": false,
            "e": false,
            "r": false,
            "t": false,
            "y": false,
            "u": false,
            "i": false,
            "o": false,
            "p": false,
            "a": false,
            "s": false,
            "d": false,
            "f": false,
            "g": false,
            "h": false,
            "j": false,
            "k": false,
            "l": false,
            "z": false,
            "x": false,
            "c": false,
            "v": false,
            "b": false,
            "n": false,
            "m": false,
        }
    }

    bl.controls = controls;

    initMouseListener(canvas);
    initKeyboardListener();


};
