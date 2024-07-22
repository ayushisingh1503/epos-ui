import { View, Text } from "react-native";

const OpenOrder = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
};

export default OpenOrder;

// return (
//   <ImageContainer source={require("../assets/layout.png")}>
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.text}>Order List</Text>
//         <TouchableOpacity onPress={""}>
//           <LinearGradient
//             colors={["#180564", "#745B93"]}
//             style={styles.linearGradient}
//           >
//             <Text style={styles.buttonText}>Log Out</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.body}>
//         <View style={styles.translucentRectangle}>
//           <View style={styles.translucentRectangleHeader}>
//             <Text style={styles.orderNumber}>Order Number</Text>
//             <Text style={styles.status}>Stauts</Text>
//           </View>
//           <ScrollView style={styles.scrollview}>
//             <FlatList
//               data={orderList}
//               keyExtractor={(item) => item.ordernumber}
//               renderItem={({ item }) => (
//                 <GradientBackground style={styles.orderRow}>
//                   <Text style={styles.order}>
//                     {item.label} {item.ordernumber}
//                   </Text>
//                   <Pressable
//                     onPress={() => {
//                       Alert.alert("pressed");
//                     }}
//                   >
//                     <Text style={styles.orderStatus}>{item.status}</Text>
//                   </Pressable>
//                 </GradientBackground>
//               )}
//             />
//           </ScrollView>
//         </View>
//       </View>
//     </View>
//   </ImageContainer>
// );
