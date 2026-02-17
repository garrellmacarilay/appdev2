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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    icon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: '#1E293B',
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

            {/* Username Input */}
            <View style={styles.inputContainer}>
                <Ionicons style={styles.icon} name="person-outline" size={20} color="#94A3B8" />
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="#CBD5E1"
                    style={styles.input}
                />
            </View>

            {/* Email Input */}
            <View style={styles.inputContainer}>
                <Ionicons style={styles.icon} name="mail-outline" size={20} color="#94A3B8" />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#CBD5E1"
                    style={styles.input}
                    keyboardType="email-address"
                />
            </View>
        </View>
    );
}
