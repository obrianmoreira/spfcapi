import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { database } from "./database";

async function ReadYears() {
    try {
        const dbInstance = query(collection(database, 'years'), orderBy('taskResquest', 'desc'));
        const queryData = await getDocs(dbInstance);
        const queryArray = [];
        queryData.forEach((doc) => {
            queryArray.push({id: doc.id, ...doc.data()});
        });// const yearsArray = queryArray.map(item => item.years);
        console.log(queryArray);
        return queryArray;
    } catch (error) {
        console.log(error)
    }
}

export async function ReadHistories() {
    try {
        const dbInstance = collection(database, 'histories');
        const queryData = await getDocs(dbInstance);
        const queryArray = [];
        queryData.forEach((doc) => {
            queryArray.push({id: doc.id, ...doc.data()});
        });
        return queryArray;
    } catch (error) {
        console.log(error)
    }
}

export async function ReadSearches() {
    try {
        const searchInstance = collection(database, 'searches');
        const searchDocs = await getDocs(searchInstance);
        const searchArray = [];
        searchDocs.forEach((doc) => {
            searchArray.push({id: doc.id, ...doc.data()});
        });
        console.log(lastSearchedData);
        return lastSearchedData;
    } catch(error) {
        console.log(error);
    }
}

export default ReadYears;