import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useCart } from './CartContext';

const PostDetailsScreen = ({ route }) => {
  const { post } = route.params;
  const { addToCart, cartItemCount } = useCart();

  const handleAddToCart = () => {
    addToCart(post);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
      <Text>{cartItemCount} item(s) in cart</Text>
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
  body: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default PostDetailsScreen;
