import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";

const db = getFirestore();
await addDoc(collection(db, "users"), { name: "Ana", active: true });

const q = query(collection(db, "users"), where("active", "==", true));
const snap = await getDocs(q);
snap.forEach((d) => console.log(d.data()));
- Update config — iteration 2 (2015)
- Add validation — iteration 8 (2015)
- Improve naming — iteration 9 (2015)
- Optimize performance — iteration 17 (2015)
- Improve naming — iteration 20 (2015)
- Add validation — iteration 21 (2015)
- Fix edge case — iteration 25 (2015)
- Improve error handling — iteration 27 (2015)
- Update dependencies — iteration 28 (2015)
- Refactor module — iteration 29 (2015)
- Optimize performance — iteration 34 (2015)
- Extend coverage — iteration 42 (2015)
- Document usage — iteration 47 (2015)
