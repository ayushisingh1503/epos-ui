import { Text, View, ImageBackground } from 'react-native';
import { styles } from '../components/userstyle'

const User = () => {
    return (
        <ImageBackground 
        source={require('../assets/layout.png')}
        style={styles.imageContainer}>
            <View>
                <Text style = {styles.bigWhite}>Hello World</Text>
            </View>

        </ImageBackground>

    )
  }

  export default User;
  