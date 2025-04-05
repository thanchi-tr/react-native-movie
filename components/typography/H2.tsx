import { Text } from 'react-native';
import {IBaseProps} from "../../interfaces";

const H2 = ({children, className, style} : IBaseProps) => {
    return <Text
        accessibilityRole="header"
        className={`text-5xl font-bold ${className}`}
        style={style}
    >

        {children}
    </Text>
}

export default H2;