import React from "react";
import { TextInput, View, Keyboard } from "react-native";
import { styles } from "../components/searchBarstyle";
import Icon from "react-native-vector-icons/FontAwesome5";

const SearchBar = ({ clicked, searchQuery, setSearchQuery, setClicked }) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        <Icon name="search" size={20} color="black" style={{ marginLeft: 1 }} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={(val) => setSearchQuery(val)}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <Icon
            name="times"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              Keyboard.dismiss();
              setSearchQuery("");
              setClicked(false);
            }}
          />
        )}
      </View>
    </View>
  );
};
export default SearchBar;
