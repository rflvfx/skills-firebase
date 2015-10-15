import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const cred = await signInWithEmailAndPassword(auth, email, password);
console.log(cred.user.uid);
- Add example — iteration 6 (2015)
- Refactor module — iteration 7 (2015)
- Extend coverage — iteration 10 (2015)
- Add example — iteration 15 (2015)
- Tweak implementation — iteration 16 (2015)
- Minor cleanup — iteration 18 (2015)
- Update docs — iteration 24 (2015)
