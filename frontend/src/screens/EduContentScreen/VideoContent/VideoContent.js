import {
  View,
  SafeAreaView,
  Text,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./videoStyle";

// components
import SearchBarComponent from "../../../components/SearchBar/SearchBar";
import VideoItem from "./VideoItem/VideoItem";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories";
import VideoCategoryItem from "./VideoCategoryItem/VideoCategoryItem";
// components

// data
import videoData from "./VideoData";
import VideoCategoryData from "./VideoCategoryData";
// data

const VideoContent = () => {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={[{ key: "unique-key" }]}
          renderItem={() => {
            return (
              <View>
                <View style={{ zIndex: 100, marginTop: 40 }}>
                  {/* search and categories */}
                  <SearchBarComponent />
                  <SearchAndCategories currentView={"VideoScreen"} />
                  {/* search and categories */}
                </View>
                {/* video list */}
                <View style={styles.VideoList}>
                  <FlatList
                    data={videoData}
                    renderItem={({ item }) => {
                      return <VideoItem item={item} />;
                    }}
                  />
                </View>
                {/* video list */}
                {/* video categories */}
                <View style={[styles.VideoCategories, { marginBottom: 110 }]}>
                  <Text style={{ fontSize: 18, margin: 12 }}>
                    Search by Categories
                  </Text>
                  <FlatList
                    style={{ flex: 1 }}
                    data={VideoCategoryData}
                    renderItem={({ item }) => {
                      return <VideoCategoryItem item={item} />;
                    }}
                    horizontal
                  />
                </View>
                {/* video categories */}
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default VideoContent;
