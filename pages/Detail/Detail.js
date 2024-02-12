import { Text, View, Image } from "react-native";
import React from "react";

import styles from "./Detail.style";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";

const Detail = ({ route }) => {
  const { id } = route.params;
  const { loading, error, data } = useFetch(
    `${process.env.EXPO_PUBLIC_API_URL}/${id}`
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  );
};

export default Detail;
