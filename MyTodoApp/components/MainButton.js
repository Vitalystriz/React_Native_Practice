import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS, SPACING } from '../styles/Theme';

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: FONTS.inputHeight,
    backgroundColor: '#1C1C1E',
    borderRadius: 30, //CHANGE 4
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.md,
    paddingHorizontal: 30 //CHANGE 5
  },
  buttonText: {
    color: COLORS.accent2, //CHANGE 3
    fontSize: FONTS.standard,
    fontWeight: FONTS.semiBold
  }
});