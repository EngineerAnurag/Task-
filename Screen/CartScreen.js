import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCart } from './CartContext';

const CartScreen = () => {
  const { cartItems } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cartItems.map((item, index) => (
        <Text key={index}>{item.title}: {item.quantity}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default CartScreen;
