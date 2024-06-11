import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import RegularButton from "../../components/CFButton/RegularButton";
import TemporyCard from "../../components/CFCard/TemporyCard";
import PopupMessage from "../../components/CF Pop-up/Pop-up";
import { useState } from "react";
import PostCategory from "../PostCategory/PostCategory";
import { createPost } from "../../services/postServices/postServices";

post = [
  {
    id: 1,
    image: require("../../assets/images/PostCardImages/manprofile.jpg"),
    title: "Chethiya Bandara",
  },
];

const CreatePost = () => {
  const screenHeight = Dimensions.get("window").height - 275;

  const navigation = useNavigation();

  const [popupMessage, setPopupMessage] = useState("");

  const handlePostImageButtonPress = async () => {
    try {
      const res = await createPost();
      console.log(res);
      setPopupMessage("Post Successful!");
    } catch (error) {
      console.log(error);
    }
  };

  const confirmMessage = async () => {
    navigation.navigate("PostContent");
  };

  const closeMessage = () => {
    setPopupMessage("");
  };

  return (
    <View>
      <View>
        <HeaderSub
          headLine={"Create Post"}
          subHeadLine={"Edit your post"}
          back={PostCategory}
        />
      </View>

      <View
        style={{
          height: screenHeight,
          paddingHorizontal: 25,
          paddingTop: 15,
        }}
      >
        <ScrollView ScrollView style={{ height: "100%", marginBottom: 25 }}>
          <View>
            <TemporyCard image={post.image} title={post.title} />
          </View>

          <View style={styles.buttonContainer}>
            <RegularButton
              name={"post"}
              onPress={handlePostImageButtonPress}
            ></RegularButton>
            <PopupMessage
              message={popupMessage}
              onConfirm={confirmMessage}
              onClose={closeMessage}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    flexDirection: "row",
  },
  content1: {
    flex: 1,
    flexDirection: "row",
  },
  text1: {
    fontSize: 15,
    fontWeight: "500",
    color: "#101318",
    marginBottom: 5,
  },
  text2: {
    fontSize: 12,
    fontWeight: "400",
    color: "#40495B",
  },
  content2: {
    flex: 1,
    flexDirection: "row",
  },
  buttonContainer: {
    marginBottom: 60,
  },
});

export default CreatePost;
