import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const classCollection = collection(db, 'classes');

export const addClass = async (classData) => {
  try {
    const docRef = await addDoc(classCollection, classData);
    console.log("Class added with ID:", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Error adding class:", error);
    throw error;
  }
};

export const getAllClasses = async () => {
  try {
    const snapshot = await getDocs(classCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching all classes:", error);
    return [];
  }
};

export const getTeacherClasses = async (teacherId) => {
  if (!teacherId) {
    console.error("Error: teacherId is undefined in getTeacherClasses");
    return [];
  }

  try {
    console.log("Fetching classes for teacherId:", teacherId);
    const q = query(classCollection, where('teacherId', '==', teacherId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching teacher classes:", error);
    return [];
  }
};

export const deleteClass = async (id) => {
  if (!id) {
    console.error("Error: Class ID is undefined in deleteClass");
    return;
  }

  try {
    await deleteDoc(doc(db, 'classes', id));
    console.log("Class deleted with ID:", id);
  } catch (error) {
    console.error("Error deleting class:", error);
  }
};

export const getCurrentClasses = async (teacherId) => {
  if (!teacherId) {
    console.error("Error: teacherId is undefined in getCurrentClasses");
    return [];
  }

  try {
    console.log("Fetching current classes for teacherId:", teacherId);
    const q = query(classCollection, where('teacherId', '==', teacherId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching current classes:", error);
    return [];
  }
};
