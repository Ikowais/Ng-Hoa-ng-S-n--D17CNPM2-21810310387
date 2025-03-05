import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => { // ✅ Nhận navigation từ props
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Chào mừng bạn!</Text>
      <Text style={{ fontSize: 16, color: "#555", marginBottom: 30 }}>Bạn đã đăng nhập thành công.</Text>

      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          paddingHorizontal: 20,
        }}
        onPress={() => navigation.navigate("Login")} // Quay lại màn hình Login
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
