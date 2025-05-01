import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

// Return the scaled height
export function toVH(size) {
    return height * (size / 100);
}

// Return the scaled width
export function toVW(size) {
    return width * (size / 100);
}

// Return the scaled side that is the longest
export function toVL(size) {
    const longerSide = Math.max(width, height);
    return longerSide * (size / 100);
}

// Return the scaled side that is the shortest
export function toVS(size) {
    const longerSide = Math.min(width, height);
    return longerSide * (size / 100);
}