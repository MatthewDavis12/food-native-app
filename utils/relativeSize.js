import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export function toVH(size) {
    return height * (size / 100);
}

export function toVW(size) {
    return width * (size / 100);
}

export function toVL(size) {
    return (height > width && height || width) * (size / 100);
}

export function toVS(size) {
    return (height < width && height || width) * (size / 100);
}