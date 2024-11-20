import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, inverted, isLoading}) => {

  return (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlePress}
        className={` rounded-xl min-h-[52px] justify-center w-[158px] items-center ${inverted ? 'bg-dark-100' : 'bg-secondary-100'}  ${isLoading ? 'opacity-50' : ''} ${containerStyles}`}
        disabled={isLoading}
    >
        <Text className={`font-psemibold text-lg ${inverted ? 'text-light' : 'text-dark'} ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton