import { Text } from 'react-native';
import {IBaseProps} from "../../interfaces";

const P = ({children, className, style, numberOfLine = null} : IBaseProps) => {
    return <Text
        accessibilityRole="header"
        className={`text-base ${className}`}
        style={style}
        numberOfLines = {numberOfLine}
    >

        {children}
    </Text>
}

export default P;