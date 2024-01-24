    'use client'
    import { collection, getDocs, onSnapshot } from "firebase/firestore"
    import { database } from "../controllers/database/database"
    import { useCallback, useEffect, useState } from "react";
    import {Wall, Frame, Item} from '../../components/Layout/layout';
    import { Button } from "../../components/Items/Button/button";
    import deleteHistory from "./delete";
    import updateHistory from "./update";

    const ReadHistory = () => {

        const [historyData, setHistoryData] = useState([]);
        const [searchHistory, setSearchHistory] = useState([]);
        const [chosenId, setChosenId] = useState("choosen Id");
        const [openMenu, setOpenMenu] = useState(false);
        const [buttonOpen, setButtonOpen] = useState(false);

        const getData = useCallback( async () => {
            try {
                const res = await fetch('/api/histories/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const result = await res.json();
                setHistoryData(result);
            } catch (error) {
                console.log(error)
            }
        }, []);
            
        useEffect(() => {
            getData();
        }, [getData]);


        const handleDelete = async (historyItem) => {
            deleteHistory(historyItem)
            setHistoryData((newHistory) => newHistory.filter((historyData => historyData.id !== historyItem)))
        }

        const handleUpdate = async (historyItem, newTitle, newSubTitle, newDescription) => {
            updateHistory(historyItem, newTitle, newSubTitle, newDescription);
            setNewTitle('');
            setNewSubTitle('');
            setNewDescription('');
            setOpenMenu(!openMenu)
        }

        const handleButtonClick = () => {
            setButtonOpen(!buttonOpen)
        }

        const handleChosen = () => {
            setNewChosen(chosen)
            setButtonOpen(!buttonOpen);
        }

        const  postSearchHistory = useCallback(async (randomId) => {
            try {
                const res = await fetch(`http://localhost:3000/api/searches/${randomId}`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        search : {
                            randomId,
                            searchHistory,
                        }
                    })
                });
                const data = await res.json();
                console.log(`${data}, corrrectly done`)
            } catch (error) {
                console.log(error);
            }
        }, [searchHistory]);

        const getSearchedHistory = useCallback(async (randomId) => {
            try {
                const res = await fetch(`http://localhost:3000/api/searches/${randomId}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
                setSearchHistory(res);
                console.log('done')
            } catch (error) {

            }
        }, [])

        const handleSearch = () => {
            const randomId = Math.random();
            postSearchHistory(randomId);    
            getSearchedHistory(randomId);
        }

        return (
            <>
            <input type="text" placeholder="Pesquisar" onChange={(e) =>setSearchHistory(e.target.value)} />
            <Button buttonText="Pesquisar" buttonClick={handleSearch}/>
            <Wall>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>SubTitle</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {historyData.map((history) => {
                        
                        return (
                            <>
                                <tr>
                                    <td>{history.history.titleHistory}</td>
                                    <td>{history.history.subTitleHistory}</td>
                                    <td>{history.history.descriptionHistory}</td>
                                </tr>
                            </>
                        )
                    })}
                    </tbody>
                </table>
            </Wall>
            </> 

        )

    }

    export default ReadHistory;