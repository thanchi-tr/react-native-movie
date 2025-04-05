import {Image, TextInput, View} from 'react-native';
import {icons} from "@/constants/icons";

const MySearchBar = () => {
    return( <View
            className={"mysearch-bar"}>

        <Image
            source={icons.search}
            className={"size-5 "}
            resizeMode={"contain"}
            tintColor={"#ab8bff"}
        />
        <TextInput
            onPress={() => {}}
            placeholder={"Search"}
            value=""
            placeholderTextColor={"#a8b5db"}
            className={" flex-1 ml-2 text-white"}
            />
    </View>)
}

export default MySearchBar;