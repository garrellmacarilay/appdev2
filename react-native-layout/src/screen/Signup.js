import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
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
    eyeIcon: {
        padding: 4,
    },
    signupButton: {
        width: '100%',
        backgroundColor: '#0066FF',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#0066FF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
        marginBottom: 24,
    },
    signupButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 24,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E2E8F0',
    },
    dividerText: {
        color: '#94A3B8',
        fontSize: 13,
        marginHorizontal: 16,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        marginBottom: 32,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 10,
        width: '47%',
        gap: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
    },
    socialButtonText: {
        color: '#64748B',
        fontSize: 14,
        fontWeight: '500',
    },
    loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    loginText: {
        color: '#94A3B8',
        fontSize: 14,
    },
    loginLink: {
        color: '#3B82F6',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 4,
    },
});

export default function Signup({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F9FD' }}>
            <View style={styles.container}>

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

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <Ionicons style={styles.icon} name="lock-closed-outline" size={20} color="#94A3B8" />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#CBD5E1"
                        secureTextEntry={true}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.eyeIcon}>
                        <Ionicons name="eye-off-outline" size={20} color="#94A3B8" />
                    </TouchableOpacity>
                </View>

                {/* Confirm Password Input */}
                <View style={styles.inputContainer}>
                    <Ionicons style={styles.icon} name="lock-closed-outline" size={20} color="#94A3B8" />
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor="#CBD5E1"
                        secureTextEntry={true}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.eyeIcon}>
                        <Ionicons name="eye-off-outline" size={20} color="#94A3B8" />
                    </TouchableOpacity>
                </View>

                {/* Signup Button */}
                <TouchableOpacity style={styles.signupButton}>
                    <Text style={styles.signupButtonText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Divider */}
                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>Or Continue with</Text>
                    <View style={styles.dividerLine} />
                </View>

                {/* Social Signup Buttons */}
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons name="logo-google" size={20} color="#DB4437" />
                        <Text style={styles.socialButtonText}>Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons name="logo-facebook" size={20} color="#1877F2" />
                        <Text style={styles.socialButtonText}>Facebook</Text>
                    </TouchableOpacity>
                </View>

                {/* Login Redirect Link */}
                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginLink}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
