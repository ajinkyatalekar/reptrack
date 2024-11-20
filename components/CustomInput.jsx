import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'


const CustomInput = ({title, value, placeholder, onChange, otherStyles, textBoxStyles, keyboardType, ...props}) => {
    const [showPassword, setshowPassword] = useState(false)
    return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-gray-100 text-lg'>{title}</Text>
      <View className={`border-b-hairline border-gray w-full h-14 px-4 focus:border-secondary items-center flex-row ${textBoxStyles}`}>
        <TextInput 
            className='flex-1 text-light text-base'
            value={value}
            placeholder={placeholder}
            onChangeText={onChange}
            secureTextEntry={title === 'Password' && !showPassword}
        />
      </View>
    </View>
  )
}

export default CustomInput