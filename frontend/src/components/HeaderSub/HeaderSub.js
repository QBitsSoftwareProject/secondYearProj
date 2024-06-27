import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";
import SearchBar from "../SearchBar/SearchBar";

const HeaderSub = (props) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate(props.back);
  };

  return (
    <View style={styles.contains}>
      <ImageBackground
        source={require("../../assets/images/blueSqures.png")}
        style={styles.backImg}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.backBtn} onPress={handleBackPress}>
            <Image source={require("../../assets/images/BackWhite.png")} />
          </TouchableOpacity>
          <View>
            <Text style={styles.headlineTxt}>{props.headLine}</Text>
            <Text style={styles.subHeadlineTxt}>{props.subHeadLine}</Text>
          </View>
        </View>

        <View style={{ marginTop: 50 }}>
          <SearchBar />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeaderSub;
