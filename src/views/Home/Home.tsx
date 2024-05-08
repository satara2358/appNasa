import React, { useEffect, useState } from "react"
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import fetchApi from "../../utils/fetch";
import { PostImage } from "../../types";
import TodayImage from "../../components/Header/TodayImage";


const Home = () => {
  const [todayImage, setTodayImage] = useState<PostImage>({})
  useEffect(() => {
    const loadImage = async () => {
      try {
        const imagenDay = await fetchApi()
        setTodayImage(imagenDay)
      } catch (error) {
        console.error(error)
        setTodayImage({})
      }
    }
    loadImage().catch(null)
  }, [])
  return (
    <View style={styles.container}>
      <Header/>
      <TodayImage {...todayImage}/>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  }
})
export default Home;