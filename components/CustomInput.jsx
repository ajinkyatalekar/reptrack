import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ title, value, onChange }) => {
  return (
    <View>
        <Text>{title}</Text>
        <TextInput 
            value={value}
            onChangeText={onChange}
        />
    </View>
  )
}

export default CustomInput