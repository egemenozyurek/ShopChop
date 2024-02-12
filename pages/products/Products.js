import React, {  } from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from "react-native";

import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";

const Products = () => {

    const {loading,data,error} = useFetch(process.env.EXPO_PUBLIC_API_URL)

  const renderProduct = ({ item }) => <ProductCard product={item} />;

  if (loading) {
    return <ActivityIndicator size={"large"} />;
  }

  if (error) {
    return <Text>{error}</Text>
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
