import '@/app/global.css'
import {Tabs} from "expo-router";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import TabIcon from "@/components/functionality/TabIcon";

const _Layout = () => {
    return <Tabs

        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            },
            tabBarStyle: {
                backgroundColor: "#0f0d23",
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: "absolute",
                borderWidth: 2,
                borderColor: "#0f0d21",
                shadowColor: "#D6c6ff",
                shadowRadius: 10
            }
        }
    }
    >
        <Tabs.Screen
            name="index"
            options={
            {
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({focused}: {focused: boolean}) => (
                    <TabIcon
                        img={icons.home}
                        bgImg={images.highlight}
                        tag={"Home"}
                        focused={focused}
                    />
                )

            }
        }
        />
        <Tabs.Screen
            name="search"
            options={{
                title: 'Search',
                headerShown: false,
                tabBarIcon: ({focused}: {focused: boolean}) => (
                    <TabIcon
                        img={icons.search}
                        bgImg={images.highlight}
                        tag={"Search"}
                        focused={focused}
                    />
                )

        }}
        />
        <Tabs.Screen
            name="saved"
            options={{
                title: 'Saved',
                headerShown: false,
                tabBarIcon: ({focused}: {focused: boolean}) => (
                    <TabIcon
                        img={icons.save}
                        bgImg={images.highlight}
                        tag={"Saved"}
                        focused={focused}
                    />
                )

            }
        }
        />

        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({focused}: {focused: boolean}) => (
                    <TabIcon
                        img={icons.person}
                        bgImg={images.highlight}
                        tag={"Profile"}
                        focused={focused}
                    />
                )}
        }
        />
    </Tabs>
}

export default _Layout;