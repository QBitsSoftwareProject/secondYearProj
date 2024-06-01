import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
  headerBox:{
    alignItems:'center',
    marginBottom:20,
  },
  header: {
    fontSize:28,
    color:'#40495B',
    fontWeight: "700",
    },
  boxcontainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom:20,
   },
  Image:{
    height:160,
    width:150,
    borderRadius:10,
  },
  docDetails:{
    fontSize:14,
    color:'#5C677D',
    fontWeight: "400",
    marginBottom:20,
  },
  title: {
    fontSize:18,
    fontWeight: "500",
    color:'#101318'
  },
  titledescription: {
   fontSize:14,
   fontWeight: "400",
   lineHeight:25,
   color:'#5C677D'
  },
popupContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
})


export default styles