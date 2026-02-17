import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FD',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    illustration: {
        width: 200,
        height: 200,
        marginBottom: 30,
    },
    heading: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#94A3B8',
        marginBottom: 40,
        textAlign: 'center',
    },
});

export default function Signup() {
    return (
        <View style={styles.container}>
            {/* Illustration */}
            <Image
                source={require('../assets/login.png')}
                style={styles.illustration}
                resizeMode="contain"
            />

            {/* Heading */}
            <Text style={styles.heading}>Sign Up</Text>
            <Text style={styles.subtitle}>Create your account to get started</Text>
        </View>
    );
}
