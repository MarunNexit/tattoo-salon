import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./environment";

class FirebaseService {
    constructor() {
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
    }
}