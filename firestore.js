import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";

const db = getFirestore();
await addDoc(collection(db, "users"), { name: "Ana", active: true });

const q = query(collection(db, "users"), where("active", "==", true));
const snap = await getDocs(q);
snap.forEach((d) => console.log(d.data()));
- Update config — iteration 2 (2015)
