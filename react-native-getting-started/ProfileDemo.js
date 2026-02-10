import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileDemo() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f5f5f5',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        card: {
            backgroundColor: '#ffffff',
            borderRadius: 32,
            width: '100%',
            height: '85%',
            maxWidth: 380,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.15,
            shadowRadius: 20,
            elevation: 15,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            paddingBottom: 16,
        },
        logo: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#000',
            letterSpacing: -0.5,
        },
        categoryButton: {
            backgroundColor: '#1a1a1a',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
        },
        categoryText: {
            color: '#fff',
            fontSize: 13,
            fontWeight: '600',
        },
        imageContainer: {
            position: 'flex',
            width: '100%',
            height: '67%',
            aspectRatio: 0.75,
            backgroundColor: '#f0f0f0',
        },
        profileImage: {
            position: 'flex',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
        },
        imageOverlay: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            paddingBottom: 10,
        },
        nameText: {
            fontSize: 48,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            letterSpacing: 2,
            marginBottom: 1,
            textTransform: 'uppercase',
        },
        locationBadge: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            alignSelf: 'center',
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
            marginBottom: 10,
        },
        locationText: {
            fontSize: 13,
            color: '#FF5722',
            fontWeight: '600',
        },
        actionButton: {
            backgroundColor: '#fff',
            paddingVertical: 14,
            paddingHorizontal: 32,
            borderRadius: 25,
            alignSelf: 'center',
            marginBottom: 10,
        },
        actionButtonText: {
            fontSize: 15,
            fontWeight: 'bold',
            color: '#1a1a1a',
        },
        footer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 4,
        },
        footerText: {
            fontSize: 12,
            color: '#000000ff',
            fontWeight: '600',
        },
        progressBar: {
            height: 3,
            backgroundColor: 'rgba(63, 34, 34, 0.3)',
            borderRadius: 2,
            flex: 1,
            marginLeft: 12,
        },
        progressFill: {
            height: '100%',
            backgroundColor: '#000000ff',
            borderRadius: 2,
            width: '16.67%',
        },
        petPeevesContainer: {
            marginTop: 20,
            marginBottom: 10,
            paddingTop: 20,
            borderTopWidth: 1,
            borderTopColor: 'rgba(120, 120, 120, 0.3)',
            width: '100%',
        },
        sectionTitle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#000000ff',
            textTransform: 'uppercase',
            letterSpacing: 1,
            marginBottom: 6,
        },
        petPeeveItem: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginBottom: 1,
            paddingLeft: 8,
        },
        petPeeveText: {
            fontSize: 13,
            fontWeight: '300',
            color: '#000000ff',
            lineHeight: 20,
            flex: 1,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.logo}>STUDENT{'\n'}PROFILE.</Text>
                    <View style={styles.categoryButton}>
                        <Text style={styles.categoryText}>HOBBY ▶ TRAVEL </Text>
                    </View>
                </View>

                {/* Profile Image with Overlay */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require('./assets/profile.png')}
                        style={styles.profileImage}
                    />
                </View>

                {/* Overlay Content - Centered in Container */}
                <View style={styles.imageOverlay}>
                    <Text style={styles.nameText}>GARRELL{'\n'}MACARILAY</Text>

                    <View style={styles.locationBadge}>
                        <Text style={styles.locationText}>📍 BSIS 3-B</Text>
                    </View>

                    <View style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>21 YEARS OLD</Text>
                    </View>

                    {/* Pet Peeves Section */}
                    <View style={styles.petPeevesContainer}>
                        <Text style={styles.sectionTitle}>My Pet Peeves</Text>
                        <View style={styles.petPeeveItem}>
                            <Text style={styles.petPeeveText}>1. Students who lack responsibility</Text>
                        </View>
                        <View style={styles.petPeeveItem}>
                            <Text style={styles.petPeeveText}>2. Staying in their comfort zone</Text>
                        </View>
                        <View style={styles.petPeeveItem}>
                            <Text style={styles.petPeeveText}>3. Not upskilling themselves</Text>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>1 of 6</Text>
                        <View style={styles.progressBar}>
                            <View style={styles.progressFill} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}