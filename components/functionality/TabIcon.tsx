import {ImageBackground, View, Image, ImageSourcePropType} from 'react-native';
import {ReactNode} from "react";
import {P} from "@/components/typography";

const TabIcon = ({bgImg, img, tag, focused}:
    {
        bgImg:  ImageSourcePropType,
        img:  ImageSourcePropType,
        tag: string,
        focused: boolean,
    }
) : ReactNode => {
    return ( focused ?
        <ImageBackground
            source={bgImg}
            className={"tab-icon"}
        >
        <Image source={img} tintColor={"#151312"}/>
            <P className={"icon-label "}>{tag}</P>
    </ImageBackground>
    :
            <View className={"tab-icon"}>
                <Image source={img} tintColor={"#8A8B5D"} className={"size-5"}/>
            </View>
    )
}

export default TabIcon;