import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { SCREENS } from '../../constant/screen';
import fontfamily from '../../constant/fontfamily';
import SearchBar from '../../components/Searchbar';
import {
    heightPercentageToDP as hp,
    responsiveFontSize as rf,
    widthPercentageToDP as wp,
} from '../../common/responsive_functions';
import colors from '../../constant/colors';
import api from '../../constant/api';

export default function Home(props) {
    const [products, setProducts] = useState([]);
    const [loading , setLoading] = useState(true);

    console.log("ProductsData===>>",products)

    useEffect(() => {
        getProducts();
    },[])

    const getProducts = () => {
        // API call to get products

        const URL = api.BASEURL + api.GET_PRODUCTS;
    
            fetch(URL).then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); //convert into readable format
            }).then((data) => {
                setProducts(data);
                setLoading(false);
            }).catch((error) => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }

    const renderItems = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                props.navigation.navigate(SCREENS.BOTTOM_SCREEN.ProductDetails, { SelectedItem: item })
            }} style={styles.productContainer}>
                <Image style={{ alignSelf: 'center' }} width={200} height={300} source={{ uri: item.image }} />
                <Text numberOfLines={1} style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>Price: ${item.price}</Text>
            </TouchableOpacity>
        )
    }


  return (
    <View  style={styles.container}>
       <Header title={'App'} menu onPress={() => props.navigation.toggleDrawer()} />
        <SearchBar style={styles.searchBar} searchIcon/>



        {loading ? (
                // Show loading spinner while data is being fetched
                <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
            ) : (
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id.toString()} // Use product ID as key
                        renderItem={renderItems} 
                    />
            )}

        {/* {loading && <View style={styles.loader}>
            <ActivityIndicator size='large' color={colors.PRIMARY} />
        </View>} */}


        {/* <ScrollView>
        {products.map((product, index) => (
            <TouchableOpacity
            onPress={
                props.navigation.navigate(SCREENS.BOTTOM_SCREEN.ProductDetails , { SelectedItem: product })}
             key={index} style={styles.productContainer} >
            <Image style={{ alignSelf: 'center' }} width={200} height={300} source={{ uri: product.image }} />
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
        </TouchableOpacity>
        ))}
        </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productContainer: {
        marginHorizontal: '4%',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        marginTop: '2%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 80,
        marginBottom: 10
    },
    productTitle: {
        fontFamily: fontfamily.Bold,
        fontSize: 16,
        marginRight: '4%',
        color: colors.BLACK

    },
    productPrice: {
        fontSize: 20,
        fontFamily: fontfamily.Bold,
        color: 'green',
        marginTop: 5
    },
    searchBar: {
        width: wp(90),
        borderRadius: wp(1),
        fontFamily: fontfamily.Regular,
        borderWidth: 1,
        borderColor: colors.GREAT_WHITE,
        alignSelf: 'center',
        marginBottom: '2%'
    },
})