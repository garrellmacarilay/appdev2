import {View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    input:{
        flexDirection:'row',
        justifyContent:'flex-start',
        width:'100%',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 15,
        borderColor: '#efefef',
    },
    icon:{
        marginRight: 10,
    },
    forgotPasswordContainer:{
        width:'100%',
        alignItems: 'flex-end',
        marginTop: 10,
    },
    forgotPassword:{
        color:'blue',
    },
    button:{
        width:'100%',
        backgroundColor: 'blue',
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText:{
        color: '#fff',
        padding: 12,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },



});


export default function Login() {
    return(
        <View style={styles.container}>



            <Image source={require('../assets/login.png')} style={{width:100, height:100, marginBottom:20}} />

            <Text style={styles.text}>Login</Text>

            <View style={styles.input}>
                <Ionicons style={styles.icon} name="mail-outline" size={28} color="gray" />
                <TextInput placeholder="Name" />
            </View>

            <View style={styles.input}>
                <Ionicons style={styles.icon} name="lock-closed-outline" size={28} color="gray" />
                <TextInput  placeholder="Password" secureTextEntry={true} />
            </View>

             <View style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </View>

           <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
           
           
           
        </View>
    )
}