import { Text } from 'react-native';
import {IBaseProps} from "../../interfaces";

const H3 = ({children, className, style} : IBaseProps) => {
    return <Text
        accessibilityRole="header"
        className={`text-4xl font-semibold ${className}`}
        style={style}
    >

        {children}
    </Text>
}

export default H3;