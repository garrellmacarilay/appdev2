import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input:{
        width:'100%',
        boderradius: 5,
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 15,
        borderColor: '#efefef',


    }
   
    
});

export default function Login() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>

            <TextInput style={styles.input} placeholder="Name" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
           
        </View>
    )
}