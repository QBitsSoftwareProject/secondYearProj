import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Keyboard,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  createComment,
  getComments,
} from "../../services/commentServices/commentServices";
import { useNavigation, useRoute } from "@react-navigation/native";

import CommentCard from "../../components/CFCard/CommentCard";

const CommentPage = () => {
  const route = useRoute();

  const { postId } = route.params;

  const [comment, setComment] = useState();

  const [commentList, setCommentList] = useState();

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const navigation = useNavigation();

  const goBackFromComment = () => {
    navigation.navigate("CommunityProfile");
  };

  const handleSendButtonPress = async () => {
    if (!comment) return;
    try {
      await createComment(postId, comment);
      setComment("");
      fetchComment();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComment = async () => {
    try {
      const res = await getComments(postId);
      setCommentList(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComment();
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleUpdate = () => {
    fetchComment();
  };

  const onDeleteComment = (commentId) => {
    setCommentList((prevcommentList) =>
      prevcommentList.filter((comment) => comment._id !== commentId)
    );
  };

  if (!commentList) {
    return;
  }

  return (
    <SafeAreaView
      style={{
        paddingTop: 35,
        paddingBottom: isKeyboardVisible ? 50 : 130,
        flex: 1,
      }}
    >
      <TouchableOpacity onPress={goBackFromComment}>
        <Image
          source={require("../../assets/images/BackBlack.png")}
          style={styles.backBlackImg}
        />
      </TouchableOpacity>

      <ScrollView style={{ paddingHorizontal: 25, paddingTop: 80 }}>
        <View>
          {commentList.map((item) => (
            <CommentCard
              commentId={item._id}
              key={item._id}
              postId={postId}
              Date={item.createdAt}
              content={item.content}
              onDelete={onDeleteComment}
              onUpdate={handleUpdate}
            />
          ))}
        </View>
      </ScrollView>
      <View style={[styles.content1, { bottom: isKeyboardVisible ? 0 : 85 }]}>
        <TextInput
          style={styles.textinput}
          value={comment}
          onChangeText={(text) => {
            setComment(text);
          }}
          multiline
          placeholder="Add a comment...."
        />
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            height: 45,
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
          onPress={handleSendButtonPress}
        >
          <Image
            source={require("../../assets/images/CommentSecImages/sendBtn.png")}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    zIndex: 10,
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  textinput: {
    width: "90%",
    height: 45,
    borderColor: "#E7E7E7",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 10,
  },

  sendIcon: {
    width: 40,
    height: 40,
    alignSelf: "center",
    opacity: 0.8,
  },

  backBlackImg: {
    position: "absolute",
    margin: 15,
  },
});

export default CommentPage;
