import {collection, doc, setDoc} from 'firebase/firestore'
import { database } from './database';
import { redirect } from 'next/dist/server/api-utils';

async function CreateHistories(titleHistory, subTitleHistory, descriptionHistory) {
    try {
        const dbInstance = collection(database, 'histories');
        await setDoc(doc(dbInstance), {
            history: {
                titleHistory: titleHistory,
                subTitleHistory: subTitleHistory,
                descriptionHistory: descriptionHistory,
            }
        }).then(() => {
            console.log('uhuhuh nice!');
        });
    } catch (error) {
        console.log(error);
    }
}

export async function CreateYears(dateContent, titleHistory, subTitleHistory, descriptionHistory){
    try {
        const dbInstance = collection(database, 'histories');
        await setDoc(doc(dbInstance), {
            years : {
                titleHistory: titleHistory,
                subTitleHistory: subTitleHistory,
                descriptionHistory: descriptionHistory,
            }
        }).then(() => {
            console.log(dateContent);
        });
    } catch (error) {
        console.log(error);
    }
}

export async function CreateSearches(searchHistory, searchId) {
    try {
        const dbInstance = collection(database, 'searches');
        await setDoc(doc(dbInstance), {
            search: {
                searchId: searchId,
                searchHistory: searchHistory,
            }
        }).then(() => {
            console.log(searchHistory, searchId);
        })
        function ReturnID() {
            return searchId;
        }
        return ReturnID;
    } catch (error) {
        console.log(error);
    }
}

export default CreateHistories;