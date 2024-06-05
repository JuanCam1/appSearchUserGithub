import { Image, Text, View } from 'react-native';

import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { User } from '@/models/User.model';

interface Props {
  user: User;
}

function valideURL(url: string) {
  // Verificar si la URL comienza con "http://" o "https://"
  if (!/^https?:\/\//i.test(url)) {
    // Agregar "https://" al principio de la URL
    url = "https://" + url;
  }
  return url;
}

const UserCardInfo = ({ user }: Props) => {
  return (
    <View className="flex flex-col h-[80%] rounded-xl bg-white p-4 shadow-md dark:bg-blue-900  dark:shadow-none ">

      <View className='flex flex-row gap-4 justify-center items-center '>
        <View className="h-28 w-28 overflow-hidden rounded-full p-1 bg-gray-200">
          <Image
            source={{ uri: user.avatar_url }}
            width={96}
            height={96}
            alt={`profile img user ${user.name}`}
            className="w-full h-full rounded-full"
          />
        </View>

        <Text className=" w-[60%] text-3xl font-bold text-white text-balance">{user.name}</Text>
      </View>

      <View className='flex flex-row justify-between mt-4'>
        <View className='flex flex-row gap-2'>
          <AntDesign name="github" size={24} color="white" />
          <Text className='text-white'>@{user.login}</Text>
        </View>
        <Text className="text-white">
          {new Date(user.created_at || "").toLocaleDateString("es", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
      </View>



      <Text className="mt-4 leading-loose text-white">
        {user.bio || "Sin user bio"}
      </Text>

      <View className="mt-4 flex flex-row justify-around rounded-xl p-8 text-center bg-blue-950">
        <View className='flex flex-col gap-2 justify-center items-center'>
          <Text className="text-white">Repos</Text>
          <Text className="text-white text-xl font-bold">{user.public_repos}</Text>
        </View>
        <View className='flex flex-col gap-2 justify-center items-center'>
          <Text className="text-white">Followers</Text>
          <Text className="text-white text-xl font-bold">{user.followers}</Text>
        </View>
        <View className='flex flex-col gap-2 justify-center items-center'>
          <Text className="text-white">Following</Text>
          <Text className="text-white text-xl font-bold">{user.following}</Text>
        </View>
      </View>


      <View className=" mt-6 flex flex-col gap-4">

        <View className='flex flex-row justify-around'>
          <View className="flex flex-row gap-2">
            <Entypo name="location-pin" size={24} color="white" />
            <Text className='text-white'>{user.location}</Text>
          </View>
          <View className="flex flex-row gap-2">
              <Entypo name="link" size={24} color="white" />
            <Text
              // href={valideURL(user?.blog)}
              className="truncate text-white"
            >
              {user?.blog || "not information"}
            </Text>
          </View>
        </View>

        <View className='flex flex-row justify-around'>
          <View className="flex flex-row gap-2">
              <AntDesign name="twitter" size={24} color="white" />
            <Text
            className='text-white'
            //  href={`https://www.twitter.com/${user?.twitter_username}`}
            >
              {user?.twitter_username || "not information"}
            </Text>

          </View>
          <View className="flex flex-row gap-2">
              <Fontisto name="email" size={24} color="white" />
            <Text className='text-white'>{user?.email || "not information"} </Text>
          </View>
        </View>


      </View>
    </View >
  );
};
export default UserCardInfo;
