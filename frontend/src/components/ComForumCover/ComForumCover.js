import React from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";

const ProfileCover = (props) => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/PostCardImages/cover.jpg")}
        style={styles.bckImg}
      >
        <View style={{ alignItems: "center", zIndex: 101 }}>
          <View style={styles.profileFrame}>
            <Image source={props.proPic} style={styles.profileImage} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bckImg: {
    height: 250,
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    zIndex: 100,
    marginBottom: 30,
  },

  profileFrame: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "white",
    marginTop: 200,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default ProfileCover;
