import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const CardButton = ({style,onPress,children}) => {
    return (
        <TouchableOpacity style={[styles.btnStyle,style]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnStyle: {
        padding:10,
        paddingLeft: 70,
        paddingRight: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
});


export default CardButton;
