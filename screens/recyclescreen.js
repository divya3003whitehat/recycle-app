import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [cart, setCart] = React.useState([]);
  const [products] = React.useState([
    { id: 1, name: 'Plastic Bottle', point: 5 },
    { id: 2, name: 'Plastic Bag', point: 3 },
    { id: 3, name: 'Plastic Cover ', point: 3 },
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const getTotalPoint = () => {
    return cart.reduce((total, item) => total + item.point, 0);
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPoint}>{item.point.toFixed(0)}</Text>
      <TouchableOpacity
        onPress={() => removeFromCart(item.id)}
        style={styles.removeButton}
      >
        <Icon name="close" size={20} color="tomato" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping Cart</Text>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.totalPoint}>Total: {getTotalPoint().toFixed(0)}</Text>
      <View style={styles.productList}>
        {products.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.addButton}
            onPress={() => addToCart(product)}
          >
            <Text style={styles.addButtonText}>Add {product.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'lightgreen',
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  addButton: {
    backgroundColor: 'darkgreen',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 10,
  },
  productName: {
    fontSize: 16,
  },
  productPoint: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    marginLeft: 10,
  },
  totalPoint: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});