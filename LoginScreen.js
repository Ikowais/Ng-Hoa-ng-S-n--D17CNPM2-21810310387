import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validatePhoneNumber = (text) => {
    const phoneRegex = /^0[0-9]{9}$/; // Định dạng số điện thoại hợp lệ (bắt đầu bằng 0 và có 10 chữ số)

    if (text.length === 0) {
      setErrorMessage(""); // Không hiển thị lỗi nếu rỗng
    } else if (!phoneRegex.test(text)) {
      setErrorMessage("Số điện thoại không đúng định dạng. Vui lòng nhập lại");
    } else {
      setErrorMessage("");
    }

    setPhoneNumber(text);
  };

  const handleLogin = () => {
    if (phoneNumber.length === 10 && !errorMessage) {
      navigation.navigate("Home"); // Chuyển sang HomeScreen nếu hợp lệ
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={{ flex: 1, padding: 20, backgroundColor: "#fff", justifyContent: "flex-start" }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 40, marginBottom: 20 }}>Đăng nhập</Text>

      <Text style={{ fontSize: 16, color: "#555", marginBottom: 10 }}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={{
          height: 50,
          borderWidth: 1,
          borderColor: errorMessage ? "red" : "#ccc",
          borderRadius: 5,
          paddingHorizontal: 10,
          fontSize: 16,
          marginBottom: 10,
        }}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={validatePhoneNumber}
      />

      {errorMessage ? <Text style={{ color: "red", marginBottom: 10 }}>{errorMessage}</Text> : null}

      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: phoneNumber.length === 10 && !errorMessage ? "blue" : "#ccc",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
        }}
        disabled={phoneNumber.length !== 10 || errorMessage !== ""}
        onPress={handleLogin} // Chuyển màn hình khi nhấn nút
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Tiếp tục</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
