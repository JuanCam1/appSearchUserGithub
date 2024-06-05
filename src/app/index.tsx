import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, StatusBar, Text, View, Keyboard, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FormSearchUser from "@/components/FormSearchUser";
import UserCardInfo from "@/components/UserCardInfo";

import { type User } from "@/models/User.model";

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
      setUser(null);
      setError("User not found");
      return;
    }
    setUser(await res.json());
    setError(null);
    Keyboard.dismiss()
  };

  useEffect(() => {
    getUser("JuanCam1")
  }, [])
  return (
    <KeyboardAvoidingView className="flex-1" keyboardVerticalOffset={10} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView className="flex-1">
        <Pressable onPress={Keyboard.dismiss}>

          <StatusBar barStyle="dark-content" />

          <View className="flex flex-col gap-5 h-full items-center justify-center px-4 bg-blue-50">
            <Text className="text-blue-800 font-bold text-3xl">Search User Github</Text>
            <View className=" w-[100%] h-[70%] rounded-md p-2 " >

              <FormSearchUser getUser={getUser} />
              {user && <UserCardInfo user={user} />}
              {error && (
                <Text className=" mt-4 rounded-lg bg-red-500 p-4 text-white">{error}</Text>
              )}
            </View>
          </View>
        </Pressable>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
