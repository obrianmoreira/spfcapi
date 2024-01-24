import { database } from "../controllers/database/database"
import { doc, updateDoc } from "firebase/firestore"

async function updateHistory(updateHistory, newTitle, newSubtitle, newDescription) {

    const docRef = doc(database, 'histories', updateHistory)

    try {

        await updateDoc(docRef, {
            titleHistory: newTitle,
            subTitleHistory: newSubtitle,
            descriptionHistory: newDescription,
        })

        console.log('done!')

    } catch(error) {
        console.log('erro', error)
    }

}

export default updateHistory;