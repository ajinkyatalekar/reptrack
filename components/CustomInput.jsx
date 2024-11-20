import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import eyeIcon from '@/assets/icons/eye.png'
import eyeHideIcon from '@/assets/icons/eye-hide.png'

const CustomInput = ({title, value, placeholder, onChange, otherStyles, textBoxStyles, keyboardType, icon, ...props}) => {
    const [showPassword, setshowPassword] = useState(false)

    return (
    <View className={`${otherStyles}`}>
      <Text className='ml-2 text-gray-200 text-md mb-1 font-plight'>{title}</Text>
      <View className={`rounded-lg bg-dark-100 h-[55] px-4 focus:border-secondary justify-center items-center flex-row w-full  shadow-[2px_2px_14px_0px_rgba(255,_255,_255,_0.04)]  ${textBoxStyles}`}>
        <TextInput 
            className='flex-1 text-light font-plight shadow-[2px_2px_14px_0px_rgba(255,_255,_255,_0.4)]'
            value={value}
            placeholder={placeholder}
            onChangeText={onChange}
            secureTextEntry={title === 'Password*' && !showPassword}
            keyboardType={keyboardType}
        />

        {title === 'Password*' && (
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                <Image 
                source={!showPassword ? eyeIcon : eyeHideIcon}
                className='w-6 h-6 mr-2'
                resizeMode='contain'
                />
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default CustomInput