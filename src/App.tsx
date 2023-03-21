import Header from "./components/Header/Header";
import "./index.scss";
import "./App.scss";

import { FirebaseOptions, initializeApp } from "firebase/app";
import { getDatabase, connectDatabaseEmulator, set, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCerCmfAapmyD7h2ndi_ZJQJPSNr-OtfPI",
  authDomain: "sheet-music-app-fb.firebaseapp.com",
  projectId: "sheet-music-app-fb",
  storageBucket: "sheet-music-app-fb.appspot.com",
  messagingSenderId: "153398979626",
  appId: "1:153398979626:web:901ae4f8831b28edeae753",
  measurementId: "G-CF8CX24KY3",
  databaseURL: "https://sheet-music-app-fb-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
if (location.hostname === "localhost") {
  const DB_EMULATOR_PORT = 9000;
  connectDatabaseEmulator(db, "localhost", DB_EMULATOR_PORT);
  console.log("Using local database emulator");
}

export default function App() {
  const [count, setCount] = useState(0);

  const countRef = ref(db, 'test/count');

  useEffect(() => {
    onValue(countRef, (snapshot) => {
      const data: number = snapshot.val();
      setCount(data);
    });
  });


  function increment() {
    set(countRef, count + 1);
  }

  return (
    <main>
      <div>
        <Header title="Test header" />
        <p>Hello world</p>
        <p>Count: {count}</p>
        <button type="button" onClick={increment}>++</button>
      </div>
    </main>
  );
}
