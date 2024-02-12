import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import axios from "axios";
import Config from "react-native-config";

import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: productData } = await axios.get(process.env.EXPO_PUBLIC_API_URL);
    setData(productData);
  };

  const renderProduct = ({ item }) => <ProductCard product={item} />

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
