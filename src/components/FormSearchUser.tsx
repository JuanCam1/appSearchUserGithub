import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

interface Props {
  getUser: (username: string) => Promise<void>;
}
const FormSearchUser = ({ getUser }: Props) => {
  const [userName, setUserName] = useState("")

  const handleSubmit = async () => {
    if (!userName) return;
    await getUser(userName);
    setUserName("");
  };

  return (
    <View
      className="mb-4 flex flex-row items-center gap-2 rounded-xl bg-white p-4 shadow-md dark:bg-blue-900 dark:shadow-none"
    >
      <View className="min-w-[20px] ">
        <FontAwesome name="search" size={24} color="white" />
      </View>
      <TextInput
        onChangeText={setUserName}
        value={userName}
        placeholder="JuanCam1"
        placeholderTextColor="#cecece"
        className="h-14 flex-1 rounded-lg bg-transparent p-2 focus:ring-2 focus:ring-sky-500 dark:text-white "
      />
      <Pressable onPress={handleSubmit} className="rounded-lg bg-sky-500 px-4 py-4 ">
        <Text className='font-bold text-white'>
          Search
        </Text>
      </Pressable>
    </View>
  );
};
export default FormSearchUser;
