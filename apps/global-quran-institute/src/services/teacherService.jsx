import { collection, addDoc, getDocs, query } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const teacherCollection = collection(db, 'teachers');

export const getTeacherByName = async (name) => {
    try {
      const q = query(teacherCollection, where("name", "==", name));
      const snapshot = await getDocs(q);
  
      if (snapshot.empty) {
        return null;
      }
  
      const teacherDoc = snapshot.docs[0];
      console.log(teacherDoc.id);
      return { id: teacherDoc.id, ...teacherDoc.data() };
    } catch (error) {
      console.error("Error fetching teacher by name:", error);
      throw error;
    }
  };

export const addTeacher = async (teacherData) => {
  try {
    const docRef = await addDoc(teacherCollection, teacherData);
    console.log("Teacher added with ID:", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Error adding teacher:", error);
    throw error;
  }
};

export const getAllTeachers = async () => {
  try {
    const snapshot = await getDocs(teacherCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching all teachers:", error);
    return [];
  }
};
