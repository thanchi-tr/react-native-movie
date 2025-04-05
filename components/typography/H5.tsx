import { Text } from 'react-native';
import {IBaseProps} from "../../interfaces";

const H5 = ({children, className, style} : IBaseProps) => {
    return <Text
        accessibilityRole="header"
        className={`text-2xl font-semibold ${className}`}
        style={style}
    >

        {children}
    </Text>
}

export default H5;