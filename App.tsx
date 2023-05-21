/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef, useState } from 'react';
import type {PropsWithChildren} from 'react';
import { RNCamera, RecordOptions, RecordResponse } from 'react-native-camera';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Box from "./box"
import HomeScreen from './home';

import questions from "./questions.json"

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  const [pageState, setPageState] = useState("Home");
  const [changePage, setChangePage] = useState(0);
  
  const navigate = ()=>{
    setPageState("questions");
    renderPage();
}

  const backToHome = ()=>{
    setPageState("Home");
    renderPage();
  }

  function renderPage() {
    
    if (pageState === "Home") {
      return (<View><HomeScreen render={navigate} />
      <View><CameraScreen/></View>
      </View>);
    }
    if (pageState === "questions") {
      const changePageStatus = () =>{
        if (changePage === questions.length -1){
          setChangePage(0);
          setPageState("Home");
          renderPage();
        }
        setChangePage(changePage + 1)
        
      }
        while (changePage !=-1){
          return(
        <SafeAreaView>
          <ScrollView>
            <Box answer = {questions[changePage].answer} nextPage = {changePageStatus}>
              {questions[changePage].question}
              </Box>
          
          <View>
            <Button title="Back to home" onPress={backToHome} />
          </View>
          </ScrollView>
        </SafeAreaView>
          )
        }
      };
    }
    function CameraScreen() {
      const cameraRef = useRef<RNCamera>(null);

    const takePicture = async () => {
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        console.log(data.uri);
      }
    };
  
    return (
      <View style={{ flex: 1 }}>
        <RNCamera
          ref={cameraRef}
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
        />
        <TouchableOpacity onPress={takePicture}>
          <Text style={{ fontSize: 20, marginBottom: 20, color: 'white' }}>Take Picture</Text>
        </TouchableOpacity>
      </View>
    );
  }
  


  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: "#968e85",
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

 
        {renderPage()}
        

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop:100,
    margin: 32,
    paddingHorizontal: 24,
    alignContent:'center',
    
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign:'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  stylePage:{
    backgroundColor:"#968e85",
    

},
});

export default App;
