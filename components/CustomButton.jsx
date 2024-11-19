import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress}) => {
  return (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlePress}
    >
        <Text className={`text-primary font-psemibold text-lg text-red-500`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton