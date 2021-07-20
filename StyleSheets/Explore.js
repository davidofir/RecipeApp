import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    textInput: {
      height: 45,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 20,
      borderRadius: 10
    },
    pageTitle: {
      fontSize: 24,
      textAlign: "center",
      margin: 10,
      marginTop: 4,
      color: "white",
      fontWeight: "bold",
      textShadowColor: 'rgba(0, 0, 0, 0.55)',
      textShadowOffset: {width: -1, height: 0},
      textShadowRadius: 10
    },
    title: {
      fontWeight: "bold",
      fontSize: 25,
      // marginTop: 20,
      // marginLeft: 20
    },
    buttonStyle: {
      alignItems: "center",
      margin: 20,
      justifyContent: "center",
      height: 55,
      borderRadius: 10
    },
    sectionHeader: {
      flex: 1,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 20,
      marginRight: 20
    },
    searchBar: {
      flex: 1,
      flexDirection: "row",
      borderWidth: 1,
      margin: 20,
      marginBottom: 5,
      padding: 10,
      borderRadius: 10,
      borderColor: "#c7c7c7"
    },
    filterBtn: {
      //width: 40,
      // borderWidth: 1,
      // borderRadius: 10,
      borderColor: "#c7c7c7",
      //alignSelf: "flex-end",
      //marginRight: 20,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 20
    },
    filterContainer: {
      flex: 1,
      height: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 10,
      marginRight: 10,
      padding: 10
    },
    filtersSelected: {
      padding: 8,
      borderRadius: 15,
      borderWidth: 1,
      marginRight: 5,
      marginBottom: 2,
      backgroundColor: "#ebfadc",
      borderColor: "#83c73a"
    },
    filtersUnselected: {
      padding: 8,
      borderRadius: 15,
      borderWidth: 1,
      marginRight: 5,
      marginBottom: 2
    },
    headerBg: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
      flex: 1,
  }
  });