import {StyleProp, TextStyle} from "react-native";

export default interface IBaseTypeProps {
    children?: React.ReactNode;
    className?: string;
    style?: StyleProp<TextStyle>;
    numberOfLine?: number;
}
