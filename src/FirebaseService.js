import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, setDoc, addDoc, doc, query, where, orderBy, limit, deleteDoc, updateDoc} from "firebase/firestore/lite";
import { getAuth, browserLocalPersistence, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
    signOut, sendPasswordResetEmail, createUserWithEmailAndPassword  } from "firebase/auth";
import { firebaseConfig } from "./environment";
import React from "react";
import {getStorage} from "firebase/storage";




class FirebaseService {
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
        this.storage = getStorage(this.app);
        this.auth = getAuth(this.app, {
            persistence: browserLocalPersistence,
        });
    }

    async getTattooURL(path, label, value) {

        const q = query(collection(this.db, path), where(label, "==", value));
        console.log(value);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        return querySnapshot.docs.map(doc => doc.id);
    }

    async getTattoo(path) {
        const coursesCol = collection(this.db, path);
        const coursesSnapshot = await getDocs(coursesCol);
        return coursesSnapshot.docs.map(doc => doc.data());
    }


    async UploadData(path, authorId, url) {
        const tattooRef = await addDoc(collection(this.db, path), {authorId, url});
        setDoc(tattooRef, { id: tattooRef }, { merge: true });
    }

    async editCard(path, authorId, url) {
        console.log("edit");
        console.log(authorId);
        console.log(url);

        //console.log("/tattoo/"+path);
        const washingtonRef = doc(this.db, "/tattoo/"+path);
        console.log(washingtonRef);
        await updateDoc(washingtonRef, {authorId: authorId, url: url});
    }

    async getTempValue(path, label, value) {
        const q = query(collection(this.db, path), where(label, "==", value));
        console.log(q);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        return querySnapshot.docs.map(doc => doc.data());
    }

    async getTemp(path) {
        const q = query(collection(this.db, path));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data());
    }

    async deleteDocument(path, value) {
        const q = query(collection(this.db, path), where("id", "==", value));
        console.log(q);
        const querySnapshot = await getDocs(q);
        let deleteId = "";
        querySnapshot.forEach((doc) => {
            deleteId = doc.id;
        });
        await deleteDoc(doc(this.db, path, deleteId));
    }

    async saveUser(email, uid) {
        const usersRef = doc(this.db, "iit_users", uid);
        return setDoc(usersRef, { email }, { merge: true });
    }

    async login(email, password) {
        return await signInWithEmailAndPassword(this.auth, email, password);
    }

    async signup(email, password, name, surname, group) {
        return await createUserWithEmailAndPassword(this.auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                const usersRef = doc(this.db, "iit_users", user.uid);
                await setDoc(usersRef, { email, name, surname, group, userCredential }, { merge: true });
                return userCredential;
            }).catch(err => {
                console.log("err", err);
                return err;
            });
    }


  async logout() {
      return await signOut(this.auth);
  }

  async loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
          'login_hint': '@nung.edu.ua'
      });
      return await signInWithPopup(this.auth, provider)
          .then((result) => {
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              return result.user;
          }).catch((error) => {
              return error;
          });
  }

  async sendPasswordResetEmail(email) {
      return await sendPasswordResetEmail(this.auth, email);
  }

}

export const firebaseService = new FirebaseService();
