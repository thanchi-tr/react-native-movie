import { Text } from 'react-native';
import {IBaseProps} from "../../interfaces";

const H6 = ({children, className, style} : IBaseProps) => {
    return <Text
        accessibilityRole="header"
        className={`text-xl font-base ${className}`}
        style={style}
    >

        {children}
    </Text>
}

export default H6;