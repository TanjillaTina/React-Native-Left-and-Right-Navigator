import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../assets/styles';

export default () => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>Usuárias</Text>
    <Text style={styles.sectionDescription}>
      Você está na Página de Usuários
    </Text>
  </View>
);
