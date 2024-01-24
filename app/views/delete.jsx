import { deleteDoc, doc } from "firebase/firestore";
import { database } from "../controllers/database/database";

async function deleteHistory(deleteHistory) {

    const docRef = await doc(database, 'histories', deleteHistory);

    deleteDoc(docRef).then(() => {
        console.log('Entire document has been deleted.')
    }).catch(error => {
        console.log('Error encountered', error)
    })

}

export default deleteHistory;