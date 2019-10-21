import React, {Component} from "react";
import {View, Text, Image, StyleSheet, Button} from "react-native";

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default class Home extends Component {
    _onPressButton() {
        auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
          
      }
    render(){
        return(
            <View style={styles.perfilPage}>
                <Text>aqui é o Perfil</Text>
                <Text>aqui é a descrição</Text>
                <Button
                    onPress={this._onPressButton}
                    title="Signout"
                ></Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    perfilPage: {
        flex: 1,
        margin: 30,
        alignItems: "center",
    },
})
