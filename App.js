import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  resizeMode, 
  cover, 
  TouchableOpacity, 
  Button,
  TouchableWithoutFeedbackBase,
  TextInput,
} from 'react-native';

export default function App() {

  const pressHandle = () => console.log("HelloWorld");

  return (
    <View style={styles.container}>
      <Ionicons name="logo-instagram" size={34} color="#D1154B" style = { styles.mainLogo }/>
      <Image source ={require ("./assets/Instagram-logo-text.png")} style = {styles.logoImage}/>
      
      
      <TextInput 
        style = { styles.userInput}
        placeholder = "Phone number, email or username" 
      />

      <TextInput 
        style = { styles.userInput }
        placeholder = "Password"
      />

      <TouchableOpacity>
        <Text style = {{
            color: "#2B44D7",
            marginBottom: 10,
          }}>
          Forgotten Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style = { styles. buttonStyle }>
        <Text style = {{ 
          color: 'white', 
          fontSize: 16, 
          fontWeight: 'bold',}}>
          Log In
        </Text>
      </TouchableOpacity>

      <Text style = {{
          margin: 10,
          fontSize: 15,

        }}>
        ----------- Or -----------
      </Text>

      
      <TouchableOpacity style = { styles. buttonStyle }>
        <Text style = {{ 
          color: 'white', 
          fontSize: 16, 
          fontWeight: 'bold',
          marginLeft: 10,}}>
          
          <FontAwesome name="facebook-square" size={25} color="white"/>

            , Log In with Facebook

        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    resizeMode: cover,
    width: 250,
    height: 80,
  },
  buttonStyle: {
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#2B44D7",
    borderRadius: 8,
    color: '#EDC5D7',
  },
  userInput: {
    height: 45,
    width: '80%',
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#2B44D7",
    padding: 10,
    backgroundColor: "#E2E6E9",
    color: 'black',
  }
});
