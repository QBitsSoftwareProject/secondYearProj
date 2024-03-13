import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import TransparentButton from "../../components/CFButton/TransparentButton";
import RegularButton from "../../components/CFButton/RegularButton";
import TemporyCard from "../../components/CFCard/TemporyCard";
import { useState } from "react";

const user = 
  {
    id: 1,
    image: require("../../assets/images/PostCardImages/boydp.jpg"),
    title: "Chethiya Bandara",
  }

const pubImage = require("../../assets/images/PostCardImages/Globe.png")
const priveImage = require("../../assets/images/PostCardImages/Private.png")

const CreatePost = () => {
 const [status,setStatus] = useState('public');
 const [statusImg, setStatusImg] = useState(pubImage)


  return (
    <View>
      
      <View>
        <HeaderSub headLine={"Create Post"} subHeadLine={"Edit your post"} back={"PostCategory"}/>
      </View>

      <SafeAreaView style={{ margin: 25 }}>
        
        <ScrollView style={{ height: 500 }}>
        
            <View>
              <TemporyCard
                image={user.image}
                title={user.title}
                sub={status}
                status={statusImg}
              />
            </View>
        

          <View style={styles.flex1}>

            <View>
              <Text style={styles.text1}>Hide from community???</Text>
              <Text style={styles.text2}>This post will be private</Text>
            </View>

          </View>

          <View style={{ marginBottom: 60 }}>
            <TransparentButton />
            <RegularButton name={"post"} onPress= {() => {}}/>
          </View>

        </ScrollView>

      </SafeAreaView>

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
});

export default CreatePost;
