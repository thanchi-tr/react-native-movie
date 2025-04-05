import { Text } from 'react-native';
import {IBaseProps} from "../../interfaces";

const P = ({children, className, style} : IBaseProps) => {
    return <Text
        accessibilityRole="header"
        className={`text-base ${className}`}
        style={style}
    >

        {children}
    </Text>
}

export default P;