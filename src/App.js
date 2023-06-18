import React, { useState, useEffect } from 'react';
import { db } from './firebase.config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
// import './App'

const App = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0)

  const [users, setUsers] = useState();
  const userCollectionRef = collection(db, "users")

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      //  console.log(data)
      setUsers(data.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })));

      // console.log(users)
    }
    getUsers();
  }, [userCollectionRef]);

  const createUser = async () => {
     await addDoc(userCollectionRef, {name:newName, age: Number(newAge)})
  }

  // update
const updateUser = async (id, age) =>{
  const userDoc = doc(db, "users", id);
  const newFields = {age: age + 1}
  
  await updateDoc(userDoc,newFields)

}

//delete
const deleteUser = async (id) =>{
  const userDoc = doc(db, "users", id);
  await deleteDoc(userDoc)

}

  return (
    <div style={{ "alignItem": "center", "textAlign": "center" }}>


      <input
        placeholder='Name...'
        type="text"
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="number"
        placeholder='Age...'
        onChange={(e) => setNewAge(e.target.value)}
      />

      <button onClick={createUser}>Create User</button>



      {users?.map((user) => {
        return (
          <div>
            {" "}
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <button
            onClick={() =>{
              updateUser(user.id, user.age)
            }}
            >IncreaseAge</button>

            <button onClick={()=>deleteUser(user.id)}>Delete User</button>
          </div>
        )
      })
      }
    </div>
  )
}

export default App