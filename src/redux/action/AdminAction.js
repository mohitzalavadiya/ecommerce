import * as ActionTypes from '../ActionType'
import {
    addDoc,
    collection,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
  } from "firebase/firestore";
  import { db, storage } from "../../Firebace";
  import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytes,
  } from "firebase/storage";

export const addDataAction = () => async (dispatch) => {
    try {
      let data = [];
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      dispatch({ type: ActionTypes.READ_PRODUCTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };