import { Container, ImageContainer, styles} from '../components/userstyle';
import {View, Image, TouchableOpacity, Alert, Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const User = ({navigation}) => {
    const handlePress = () => {
        Alert.alert('Image Pressed!', 'You pressed the image.');
      };
    return(
        <ImageContainer source={require('../assets/layout.png')}>
            <Container>
                <View style = {styles.containerOne}>
                    <TouchableOpacity style={styles.button} onPress={handlePress}>
                        <LinearGradient
                            colors={['#180564', '#745B93']}
                            style={styles.button} >
                            <Image 
                            source={require('../assets/Sports Mode.png')} 
                            style={styles.buttonImage} 
                            />
                            <Text style={styles.buttonText}>Log Out</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style = {styles.containerTwo}>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                <LinearGradient
                    colors={['#180564', '#745B93']}
                    style={styles.button} >
                    <Image 
                    source={require('../assets/Restaurant Menu.png')} 
                    style={styles.buttonImage} 
                    />
                    <Text style={styles.buttonText}>Menu</Text>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                <LinearGradient
                    colors={['#180564', '#745B93']}
                    style={styles.button} >
                    <Image 
                    source={require('../assets/Purchase Order.png')} 
                    style={styles.buttonImage} 
                    />
                    <Text style={styles.buttonText}>New Order</Text>
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                <LinearGradient
                    colors={['#180564', '#745B93']}
                    style={styles.button} >
                    <Image 
                    source={require('../assets/Boxes.png')} 
                    style={styles.buttonImage} 
                    />
                    <Text style={styles.buttonText}>Inventory</Text>
                </LinearGradient>
                </TouchableOpacity>
                </View>
                <View style = {styles.containerThree}>
                    <View style = {styles.containerThreeI}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ("UserList")}>
                    <LinearGradient
                        colors={['#180564', '#745B93']}
                        style={styles.button} >
                            <Image 
                            source={require('../assets/User.png')} 
                            style={styles.buttonImage} 
                            />
                    <Text style={styles.buttonText}>User</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <LinearGradient
                        colors={['#180564', '#745B93']}
                        style={styles.button} >
                            <Image 
                            source={require('../assets/Bar Chart.png')} 
                            style={styles.buttonImage} 
                            />
                        <Text style={styles.buttonText}>Reports</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <LinearGradient
                        colors={['#180564', '#745B93']}
                        style={styles.button} >
                            <Image 
                            source={require('../assets/Help.png')} 
                            style={styles.buttonImage} 
                            />
                                <Text style={styles.buttonText}>User Guide</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    <View style = {styles.containerThreeII}>
                    <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <LinearGradient
                        colors={['#180564', '#745B93']}
                        style={styles.button} >
                            <Image 
                                source={require('../assets/iMac.png')} 
                                style={styles.buttonImage} 
                                />
                            <Text style={styles.buttonText}>Back Office</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <LinearGradient
                        colors={['#180564', '#745B93']}
                        style={styles.button} >
                            <Image 
                            source={require('../assets/Finish Flag.png')} 
                            style={styles.buttonImage} 
                            />
                            <Text style={styles.buttonText}>  End of the day  </Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.containerFour}>
                    <TouchableOpacity onPress={handlePress}>
                        <Image source = {require('../assets/Bread and Rolling Pin.png')} style = {styles.imageStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePress}>
                        <Image source = {require('../assets/Letter.png')} style = {styles.imageStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePress}>
                        <Image source = {require('../assets/Wrench.png')} style = {styles.imageStyle}/>
                    </TouchableOpacity>
                </View> 
            </Container>
        </ImageContainer>
  
    )
}
export default User ;