import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Content, Form, Item, Input,Button } from 'native-base';

export default class Dashboard extends Component<{}> {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.mainContent}>
            <View style={styles.header}>
              <Text style={styles.textHead}>
               This is  Dashboard
              </Text>
            </View>
            <View style={styles.formContent}>
              <Form style={styles.formInput}>
                <Item>
                  <Input placeholder="Username" />
                </Item>
                <Item>
                  <Input placeholder="Password" />
                </Item>

                <Button style={styles.button} rounded success onPress={() => navigation.navigate('Dashboard')}>
                  <Text> Success </Text>
                </Button>
              </Form>
            </View>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    mainContent : {
      flex: 1,
      backgroundColor: 'red'
    },
    header: {
      flex: 2,
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textHead: {
      fontWeight: '500',
      fontSize: 20,
    },
    formContent :{
      flex: 3,
      backgroundColor: 'blue',
      justifyContent: 'center',
    },
    formInput: {
      flex: 1,
      padding: 20,
    },
    buttonContent: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 10,
      padding: 25
    },
  });