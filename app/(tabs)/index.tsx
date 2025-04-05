import { View, Image, ScrollView } from "react-native";
import {images} from "@/constants/images";
import "../global.css";
import {icons} from "@/constants/icons";
import MySearchBar from "@/components/functionality/MySearchbar";

export default function Index() {
    return (
    <View className="flex-1 bg-primary w-full">
        <Image source={images.bg} className={"absolute w-full z-0"}/>

        <ScrollView
            className={"flex-1 px-5"}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                minHeight: "100%",
                paddingBottom: 10
            }}
        >
            <Image source={icons.logo} className={"size-5 w-12 h-10 mt-20 mb-5 mx-auto"}/>

            <MySearchBar/>
        </ScrollView>
    </View>
  );
}
