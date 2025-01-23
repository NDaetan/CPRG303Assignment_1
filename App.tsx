import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>CIBC</Text>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.profileText}>G3</Text>
          </TouchableOpacity>
      </View>

      {/* Offer Section */}
      <View style={styles.offerContainer}>
        <Text style={styles.offerText}>You have a new limited-time offer waiting.</Text>
        <TouchableOpacity>
          <Text style={styles.checkItOutText}>Check it out ➡</Text>
        </TouchableOpacity>
      </View>

      {/* Deposit Accounts Section */}
      <View style={styles.accountsContainer}>
        <Text style={styles.sectionTitle}>DEPOSIT ACCOUNTS</Text>

        {/* Chequing Account */}
        <View style={styles.accountCard}>
          <Text style={styles.accountName}>Chequing</Text>
          <View style={styles.accountActions}>
            <TouchableOpacity style={styles.accountCard}>
              <Text style={styles.moneyShowing}>$200.00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.debitButton}>
              <Text style={styles.debitText}>DEBIT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendMoneyButton}>
              <Text style={styles.sendMoneyText}>Send money</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Savings Account */}
        <View style={styles.savingCard}>
          <Text style={styles.accountName}>Savings</Text>
          <TouchableOpacity style={styles.moneyShowing}>
              <Text style={styles.moneyShowing}>$200.00</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity
        onPress={() => {
          alert("Finally Functioning!                          Hello from Group 3 ");
       }}>
      <Text style={styles.alertButton}>Alert Button</Text>
        </TouchableOpacity>
      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navItem}>🏠Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>🔄Move money</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>📊Advice</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>🔲More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  logo: 
  { fontSize: 24, 
    fontWeight: 'bold', 
    color: '#D50000',
    marginTop: 20, 
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 15,
  },
  profileIcon: 
  { backgroundColor: '#D50000', 
    padding: 10, 
    borderRadius: 60,
    marginTop: 20,
  },

  profileText: 
  { color: 'white', 
    fontWeight: 'bold' },

  offerContainer: {
    backgroundColor: '#D32F2F',
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
  },
  offerText: {
    color: '#fff',
    fontSize: 16,
  },
  checkItOutText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  accountsContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  accountCard: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  accountName: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  accountActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  debitButton: {
    backgroundColor: '#D32F2F',
    borderRadius: 5,
    padding: 15,
    marginRight: 10,
  },
  debitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sendMoneyButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    padding: 10 ,
    marginRight: 10,
  },
  sendMoneyText: {
    fontWeight: 'bold',
    padding: 5,
  },
  moreOptions: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  moreText: {
    fontSize: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    fontWeight: 'bold',
    color: '#D32F2F',
  },
  savingCard: { 
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  moneyShowing: { 
    fontWeight: 'bold', 
    padding: 10, 
    backgroundColor:'#E0E0E0'
  },  
  alertButton: {
    backgroundColor: '#ffd700',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginLeft: 100, 
    marginRight: 110,
  },
});
