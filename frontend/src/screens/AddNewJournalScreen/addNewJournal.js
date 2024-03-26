import React, {useState} from "react";
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, SafeAreaView, TextInput, Button, } from "react-native";
import { EmojiPicker } from "./emoji";
import styles from "../AddNewJournalScreen/styles";
import { CustomButton } from "./switch";
import { JournalTittle } from "./journalTittle";
import { JournalEntry } from "./journalEntry";

import {Overlay} from "./AddNewPopup";
import TabBar from "../../components/TabBar/TabBar";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import axios from 'axios';


export const AddNewJournal = ({navigation}) =>{

const [isOverlayVisible, setOverlayVisible] = useState(false);                                  
const [selectedEmojiMarks, setSelectedEmojiMarks] = useState('');
const [tittle, setTittle] = useState('');
const [journalEntry, setJournalEntry] = useState('');
const [emoji, setEmoji] = useState('');
const [date,setdate] = useState('');
const [time,settime ]= useState('');

const userid = '214102J';
const imgUrl = 'This is image url';

      const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
       };

      const handleViewButton = () =>{
      navigation.navigate('ViewJournal',{ 

    }); 
}

const handleEmojiPress = ({ emoji, mark }) => {
      setSelectedEmojiMarks((prevMarks) => prevMarks + `${emoji}(${mark})`);
      setEmoji(mark);
};


  const handleCreateButton = async() =>{

      if(!emoji){
           alert('Emoji is required');
      }

      if(!journalEntry){
            alert('Journal is required');
       }

            const currentDate = new Date();

            const formattedDate = currentDate.toLocaleDateString();
            const formattedTime = currentDate.toLocaleTimeString();

            setdate(formattedDate);
            settime(formattedTime);

            try{
                  const journalResponse = await axios.post('http://192.168.43.51:3000/journal/add-journal',{

                  userid,
                  emoji,
                  tittle,
                  journalEntry,
                  imgUrl,
                  time: formattedTime, // Use the formatted time here
                  date: formattedDate
                        
                  });

                  if(journalResponse.data){
                        console.log('data ok');
                  }
            }catch (error){
                  console.log(error);
            }

      
      console.log(emoji);
      console.log(tittle);
      console.log(journalEntry);
      console.log(date);
      console.log(time);
      console.log(userid);
      console.log(imgUrl);

     
      toggleOverlay();

  }


  

    return(
      <View>
<HeaderSub

      headLine={"Add New Journal"}
      subHeadLine={"Wellcome to our mindful haven"}
      back={'ViewJournal'}
/>

<CustomButton btnView={handleViewButton}></CustomButton>


      <ScrollView height = {500}>
   
      <SafeAreaView style={styles.container}>

        
      <Text style={styles.Text}>Feeling with...</Text>

      <EmojiPicker onEmojiPress={handleEmojiPress} />

        

      <Text style={styles.Text1}>Journal Tittle</Text>

      <JournalTittle value = {tittle} newText = {setTittle}/>

      <Text style={styles.Text2}>Write your journal</Text>

      <JournalEntry value = {journalEntry} newText = {setJournalEntry}/>

 <View>
      
      <TouchableOpacity style={styles.create} onPress={handleCreateButton}>
      <Text style={styles.createText}>Create Journal</Text>
      </TouchableOpacity>
      <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} propbtnfunction={handleViewButton} />
    </View>

   

      </SafeAreaView>

      </ScrollView>

<View style={{  top:65, left: 0, right: 0 }}>
<TabBar />
</View>

</View>

    );



};

