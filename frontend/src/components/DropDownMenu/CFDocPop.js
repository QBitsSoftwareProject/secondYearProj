import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const DocPop = (props) => {
  const navigation = useNavigation();

  const handleEdit = () => {
    navigation.navigate("CreatePost");
  };
  return (
    <View style={styles.DropPop}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleEdit()} style={styles.contains1}>
          <Text style={styles.DPtext}>{props.DPtext1}</Text>
          <Image
            source={require("../../assets/images/PostCardImages/Edit.png")}
            style={styles.edtImg}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleDelete()}
          style={styles.contains1}
        >
          <Text style={styles.DPtext}>{props.DPtext2}</Text>
          <Image
            source={require("../../assets/images/PostCardImages/DeleteBin.png")}
            style={styles.dltImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  DropPop: {
    width: 100,
    height: "auto",
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 1,
    marginHorizontal: 5,
  },
  container: {
    flex: 1,
    height: "auto",
    flexDirection: "column",
    alignItems: "center",
  },
  DPtext: {
    color: "#40495B",
    fontWeight: "400",
    lineHeight: 35,
  },
  contains1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  edtImg: {
    width: 11.5,
    height: 11.5,
  },

  dltImg: {
    width: 13.5,
    height: 13.5,
  },
});

export default DocPop;
