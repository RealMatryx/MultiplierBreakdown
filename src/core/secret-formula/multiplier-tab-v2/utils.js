import {MT_Effect, MT_MultiplierType, MT_WrappedEffect} from "./type.js"
export class MTUtils {
    static convert(effect, type) {
        if (effect instanceof MT_Effect) {
            return changeType(effect, type);
        }

        // Doesn't know what it is
        console.log(effect);
        Error("Nultiplier Tab can't recognize what this is.");
    }
    static changeType(mt_effect, type) {
        mt_effect.type = type;
        return mt_effect;
    }
}