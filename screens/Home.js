import {
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  Button,
  View,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Global } from '../style/GlobalStyles';

export default function Home({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    // <ScrollView style={Global.container}>
    //   {users.map((user) => (
    //     <TouchableOpacity
    //       key={user.id}
    //       style={Global.main}
    //       onPress={() => navigation.navigate('Tododetails', { user })}
    //     >
    //       <Text>{user.name}</Text>
    //       <Text style={Global.userN}>{user.username}</Text>
    //     </TouchableOpacity>
    //   ))}
    // </ScrollView>

    <View style={Global.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={Global.main}
            onPress={() => navigation.navigate('Tododetails', { item })}
          >
            <Text>{item.name}</Text>
            <Text style={Global.userN}>{item.username}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
