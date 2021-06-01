import {System} from "blecs";

interface BlengineComponent {
    name: string;
}

interface BlengineSystem {
    name: string;
    componentSubscriptions: Array<BlengineComponent>;
    system: System;
}

export interface BlengineConfig {
    components: Array<BlengineComponent>;
    systems: Array<BlengineSystem>;
}
