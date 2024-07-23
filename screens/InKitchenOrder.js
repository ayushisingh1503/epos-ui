import { View, Text, TouchableOpacity, FlatList } from "react-native";
import react, { useState } from "react";
import { styles, ImageContainer } from "../components/inkitchenstyle";
import { ScrollView } from "react-native-virtualized-view";
import Icon from "react-native-vector-icons/FontAwesome";
import { Dropdown } from "react-native-element-dropdown";

const InKitchenOrder = () => {
  const data = [
    { label: "Last 1 week", value: "Last 1 week" },
    { label: "Last 1 month", value: "Last 1 month" },
    { label: "Last 6 months", value: "Last 6 months" },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <ImageContainer source={require("../assets/layout.png")}>
      <View style={styles.container}>
        <View style={styles.translucentRectangle}>
          {/* <View style={styles.translucentRectangleHeader}>
            <Text style={styles.orderNumber}>Order Number</Text>
            <Text style={styles.orderNumber}>Date & Time</Text>
            <Text style={styles.orderNumber}>Staff Name</Text>
          </View> */}
          <View style={styles.translucentRectangleHeader}>
            <Text style={styles.orderNumber}>Order Number</Text>
            <TouchableOpacity style={styles.orderDateTime}>
              <Dropdown
                style={styles.dropdown}
                data={data}
                value={value}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select item" : "..."}
                searchPlaceholder="Search..."
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
                renderLeftIcon={() => (
                  <Text style={[styles.textDateTime, isFocus]}>
                    Date & Time
                  </Text>
                )}
                renderRightIcon={() => (
                  <Icon
                    style={styles.icon}
                    color="white"
                    name="caret-down"
                    size={20}
                  />
                )}
              />
            </TouchableOpacity>
            <Text style={styles.orderNumber}>Staff Name</Text>
          </View>
          <ScrollView style={styles.scrollview}>
            {/* <FlatList
                data={}
                keyExtractor={(item) => item.ordernumber}
                renderItem={({ item }) => (
                  <GradientBackground style={styles.orderRow}>
                    <Text style={styles.order}>
                      {item.label} {item.ordernumber}
                    </Text>
                    <Pressable
                      onPress={() => {
                        Alert.alert("pressed");
                      }}
                    >
                      <Text style={styles.orderStatus}>{item.status}</Text>
                    </Pressable>
                  </GradientBackground>
                )}
              /> */}
          </ScrollView>
        </View>
      </View>
    </ImageContainer>
  );
};

export default InKitchenOrder;
