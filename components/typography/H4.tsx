import { Text } from 'react-native';
import {IBaseProps} from "../../interfaces";

const H4 = ({children, className, style} : IBaseProps) => {
    return <Text
        accessibilityRole="header"
        className={`text-3xl font-semibold ${className}`}
        style={style}
    >

        {children}
    </Text>
}

export default H4;