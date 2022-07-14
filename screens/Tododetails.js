import { View, Text, FlatList } from 'react-native';
import { Global } from '../style/GlobalStyles';
import React, { useState, useEffect } from 'react';

export default function Tododetails({ route, navigation }) {
  const [users, setUsers] = useState([]);
  const { item } = route.params;
  const url = `https://jsonplaceholder.typicode.com/users/${item.id}/todos`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <View style={Global.container}>
      {/* <Text>{item.name}</Text>
      <Text>{item.username}</Text>
      <Text>{item.email}</Text>
      <Text>{item.phone}</Text>
      <Text>{item.website}</Text>
      <Text>{item.company.name}</Text> */}

      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={Global.main}>
            <Text>{item.title}</Text>
            <Text>Task: #{item.id}</Text>
            <View style={Global.done}>
              <Text>Todo UserID: {item.userId}</Text>
              <Text>Completed: {String(item.completed)}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
