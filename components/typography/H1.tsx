import { Text } from 'react-native';
import {IBaseProps} from "../../interfaces";

const H1 = ({children, className, style} : IBaseProps) => {
    return <Text
            accessibilityRole="header"
            className={`text-6xl font-extrabold ${className}`}

            >
        {children}
    </Text>
}

export default H1;