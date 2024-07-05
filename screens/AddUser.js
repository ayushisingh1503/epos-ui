// import {
//   View,
//   Text,
//   TextInput,
//   Modal,
//   TouchableOpacity,
//   Button,
// } from "react-native";
// import React, { useState } from "react";
// import { styles } from "../components/adduserstyle";
// import { ImageContainer } from "../components/adduserstyle";
// import { LinearGradient } from "expo-linear-gradient";

// const AddUser = () => {
//   const [modalVisible, setModalVisible] = useState(true);
//   const [email, onChangeText] = React.useState("");

//   return (
//     <Modal
//       animationType="fade"
//       transparent={true}
//       visible={modalVisible}
//       onRequestClose={() => setModalVisible(!modalVisible)}
//     >
//       <View style={styless.modalOverlay}>
//         <View style={styless.heading}>
//           <Text style={styless.titleText}>User Management</Text>
//         </View>
//         <View style={styles.body}>
//           <View style={styles.userinput}>
//             <View style={styles.userid}>
//               <Text style={styles.textstyle}>User ID</Text>
//               <TextInput
//                 placeholder="Enter User ID"
//                 style={styles.textInput}
//                 onChangeText={onChangeText}
//                 value={email}
//               />
//             </View>
//             <View style={styles.access}>
//               <Text style={styles.textstyle}>Access</Text>
//             </View>
//             <View style={styles.footerbuttons}>
//               <TouchableOpacity
//                 style={styles.closebutton}
//                 onPress={() => setModalVisible(!modalVisible)}
//               >
//                 <LinearGradient
//                   colors={["#180564", "#745B93"]}
//                   style={styles.closebutton}
//                 >
//                   <Text style={styles.buttonText}>Close</Text>
//                 </LinearGradient>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.savebutton}
//                 onPress={() => setModalVisible(!modalVisible)}
//               >
//                 <LinearGradient
//                   colors={["#180564", "#745B93"]}
//                   style={styles.savebutton}
//                 >
//                   <Text style={styles.buttonText}>Save</Text>
//                 </LinearGradient>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.numberpad}></View>
//         </View>
//       </View>
//     </Modal>
//   );
// };
// export default AddUser;
