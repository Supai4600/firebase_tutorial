import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation, handleLogout }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>ScanAcne</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.bookingButton}
          onPress={() => navigation.navigate('Booking')}
        >
          <Text style={styles.buttonText}>Go to Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.borrowButton}
          onPress={() => navigation.navigate('Borrow')}
        >
          <Text style={styles.buttonText}>Borrow</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa', // Slightly different background for a clean look
  },
  title: {
    fontSize: 28, // Larger font size
    marginBottom: 24, // More space below the title
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333', // Darker color for better contrast
  },
  buttonContainer: {
    flexDirection: 'row', // Horizontal alignment of buttons
    justifyContent: 'space-between',
    width: '100%', // Full width for even button layout
    marginBottom: 20, // Space below the button container
  },
  bookingButton: {
    flex: 1,
    height: 120, // Taller button
    paddingLeft: 16,
    paddingTop: 16,
    backgroundColor: '#3498db',
    borderRadius: 8, // More rounded corners
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginRight: 10,
    shadowColor: '#000', // Added shadow for better elevation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  borrowButton: {
    flex: 1,
    height: 120,
    paddingLeft: 16,
    paddingTop: 16,
    backgroundColor: '#2ecc71',
    borderRadius: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Larger font size for buttons
    fontWeight: 'bold', // Bold text
  },
  logoutButton: {
    width: '100%',
    padding: 16,
    backgroundColor: '#e74c3c',
    borderRadius: 8, // More rounded corners
    alignItems: 'center',
    marginTop: 20, // Space between buttons and logout
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default HomeScreen;
