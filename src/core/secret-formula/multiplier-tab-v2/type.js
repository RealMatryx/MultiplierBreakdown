"use strict";
import {MTUtils as Utils} from "./utils"
import {Effect as EffectState} from "../../game-mechanics/effect"
export class MT_MultiplierType {
    static Unknown = -1;
    static Add = 0;
    static Mul = 1;
    static Pow = 2;
}

export class MT_Effect {
    // display value, especially for Group
    addValue = 0;
    mulValue = 1;
    powValue = 1;

    type = MT_MultiplierType.Unknown; // MT_MultiplierType
    value;
}

// A group of Effects.
export class MT_Group extends MT_Effect {
    constructor() { 
        this.multipliers = [];
    }

    // The checker function. You can not to set it,
    // but if you set it, the game will display "???" if the multiplier is bigger or smaller.
    check;
    setCheck(func) {
        this.check = func;
    }

    multipliers;// MT_WrappedEffect[]
    times(effect) {
        this.multipliers.push(Utils.convert(effect, MT_MultiplierType.Mul));
    }
}

// A single effect.
export class MT_BaseEffect extends MT_Effect {
}

export class MT_StateEffect extends MT_BaseEffect {
    state;
    constructor(state) {
        if (!state instanceof EffectState) console.log(state);Error("Not a effect!");
        this.state = state;
    }
}