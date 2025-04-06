import { Link } from 'expo-router';
import {Image, TouchableOpacity, View} from 'react-native';
import {TMDB} from "@/constants/configs";
import P from "@/components/typography/P";
import {icons} from "@/constants/icons";

interface MovieCardProps {
    title : string;
    id: string;
    poster_path: string;
    vote_average: number;
    release_date: string;

}

const MovieCard = (
    {title, id, poster_path, release_date, vote_average} : MovieCardProps
) => {
    console.log(poster_path);
    return (
        <Link href={`/movies/${id}`} asChild={true}>
            <TouchableOpacity
                className={"w-[30%]"}>
                <Image
                    source={{
                        uri: poster_path
                            ? `${TMDB.IMG_URL}${poster_path}`
                            :TMDB.IMG_DEFAULT
                    }}
                    className={"w-full h-52 rounded-lg"}
                    resizeMode="cover"
                    />
                <View className={`flex-col gap-1 justify-between`}>
                    <P className={"text-white text-xs"} numberOfLine={1}>{title}</P>
                    <View className={"flex-row  justify-between "}>
                        <P className={"text-white"}>{release_date?.split("-")[0]}</P>
                        <View className={"flex-row items-center justify-end pr-2 gap-x-1"}>
                            <Image source={icons.star} className={"size-3"} />
                            <P className={"text-white"}>{(vote_average/2).toFixed(1)}</P>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard;