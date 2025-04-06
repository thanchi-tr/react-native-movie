import {View, Image, ScrollView, ActivityIndicator, FlatList} from "react-native";
import {images} from "@/constants/images";
import "../global.css";
import {icons} from "@/constants/icons";
import MySearchBar from "@/components/functionality/MySearchbar";
import {useRouter} from "expo-router";
import useFetch from "@/hooks/useFetch";
import {fetchMovie} from "@/serviecs/movieAPI";
import {H4, P} from "@/components/typography";
import MovieCard from "@/components/functionality/MovieCard";

export default function Index() {
    const router = useRouter();

    const {
        data: movies,
        loading:moviesLoading,
        error: moviesError
    } = useFetch(()=> fetchMovie({query: ""}));

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
            {
                moviesLoading ?
                    <ActivityIndicator
                        color="#0000ff"
                        size="large"
                        className={"mt-10 self-center"}
                    />
                    :
                    <View className={"flex-1 flex-column mt-5"}>
                        <MySearchBar onPress={() => router.push("/search")}
                                     placeholder="Search For a Movie"
                        />

                        <H4 className={"text-white mt-5 mb-5"}> Latest Movie</H4>

                        <FlatList
                            data={movies?.results || []}
                            renderItem={({ item }) => (
                                <MovieCard
                                    {...item}
                                    />
                            )}
                            keyExtractor={(item) => item.id.toString()}
                            numColumns={3}
                            columnWrapperStyle={
                                {
                                    justifyContent: 'flex-start',
                                    gap: 20,
                                    paddingRight: 5,
                                    marginBottom: 10
                                }
                            }
                            className={"mt-2 pb-32"}
                            scrollEnabled={false}
                        />
                    </View>

            }

        </ScrollView>
    </View>
  );
}
