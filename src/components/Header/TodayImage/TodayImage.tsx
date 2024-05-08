import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { PostImage } from "../../../types";
import React, { FC } from "react";

const TodayImage: FC<PostImage> = ({
  date,
  title,
  url
}) => {
  return (
    <View>
      <Image source={{ uri: url }} style={styles.images}/> 
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.date}>
        {date}
      </Text>
      <TouchableOpacity
        onPress={() => {
          console.log('Enter')
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>
          IMagen Dia
        </Text>
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
  images: {
    width: '100%',
    height: 590,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 32,
    marginVertical: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold'
  },
  date:{
    color: "#fff",
    fontSize: 16
  },
  buttonContainer: {
    alignItems: 'flex-end'
  },
  buttonText:{
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }
})
 
export default TodayImage;