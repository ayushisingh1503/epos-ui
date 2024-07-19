import React from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import { styles } from "../components/filterstyle";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, quantity }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>{details}</Text>
  </View>
);

// the filter
export default List = ({ searchQuery, setCLicked, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchQuery === "") {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the name
    if (
      item.name
        .toUpperCase()
        .includes(searchQuery.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the description
    if (
      item.details
        .toUpperCase()
        .includes(searchQuery.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} details={item.details} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          //   keyExtractor={""}
          //   keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
};
