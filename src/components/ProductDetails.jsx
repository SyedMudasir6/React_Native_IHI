import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constant/colors';
import Header from './Header';
import fontfamily from '../constant/fontfamily';

export default function ProductDetails({ route }) {
  const { SelectedItem } = route.params;
  console.log("SelectedItem????", SelectedItem)
  return (
    <View style={styles.container}>
      <Header back productName={SelectedItem.title} />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: '100%' }}>
          <ImageBackground style={styles.image} source={{ uri: SelectedItem.image }} />
        </View>
        <Text style={styles.productTitle}>{SelectedItem.title}</Text>
        <Text style={styles.productTitle}>{SelectedItem.description}</Text>
        <Text style={styles.productTitle}>{SelectedItem.price}</Text>
        <Text style={styles.productTitle}>{SelectedItem.category}</Text>
        <Text style={styles.productTitle}>{SelectedItem.rating.count}</Text>
        <Text style={styles.productTitle}> ⭐⭐⭐⭐{SelectedItem.rating.rate}</Text>
        <Text style={styles.productTitle}> ⭐⭐⭐⭐{SelectedItem.rating.rate}</Text>
        <Text style={styles.productTitle}> ⭐⭐⭐⭐{SelectedItem.rating.rate}</Text>
        <Text style={styles.productTitle}> ⭐⭐⭐⭐{SelectedItem.rating.rate}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GREAT_WHITE
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  productTitle: {
    fontFamily: fontfamily.Bold,
    fontSize: 16,
    marginRight: '4%',
    color: colors.BLACK

  },
})