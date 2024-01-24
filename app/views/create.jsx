'use client'
import { useEffect, useState } from "react";
import {Wall, Frame} from '../../components/Layout/layout';
import { Button } from "../../components/Items/Button/button";
import { useDispatch, useSelector } from "react-redux";

export const CreateHistory = () => {


    /*const dispatch = useDispatch();
    const visibility = useSelector(state => state.reducer.table)*/
    const [titleHistory, setTitleHistory] = useState('');
    const [subTitleHistory, setSubTitleHistory] = useState('');
    const [descriptionHistory, setDescriptionHistory] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [typeData, setTypeData] = useState('Tipo de dado');
    const [dateContent, setDateContent] = useState();
    const [parseDateContent, setParseDateContent] = useState();


    async function saveData(titleHistory, subTitleHistory, descriptionHistory){
        try {
            const res = await fetch(`/api/${typeData}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    [typeData] : {
                        dateContent : {
                            typeData,
                            dateContent,
                            titleHistory,
                            subTitleHistory,
                            descriptionHistory,
                        }
                    }
                })
            })
            const data = await res.json();
            console.log(`${data} correctly sent to the endpoint`);
            setTitleHistory('');
            setSubTitleHistory('');
            setDescriptionHistory('');
        } catch (error) {
            console.log(error)
        }
    }

    const handleSaveData = () => {
        saveData(titleHistory, subTitleHistory, descriptionHistory);
    }

    return (

        <>
            <Wall>
                <Frame>
                    <input type="text" placeholder='Titulo Historia' onChange={(e) => setTitleHistory(e.target.value)}/>
                    <input type="text" placeholder='Subtitulo' onChange={(e) => setSubTitleHistory(e.target.value)}/>
                    <input type="text" placeholder='Descricaco' onChange={(e) => setDescriptionHistory(e.target.value)}/>
                    <input type="text" placeholder={typeData} onClick={(e) => setShowDropdown(!showDropdown)}/>
                    <input type="text" placeholder={dateContent} onChange={(e) => setDateContent(e.target.value)}/>
                    <Button buttonText="Submit" buttonClick={handleSaveData}/>
                    <Frame>
                        {showDropdown ?
                        
                            (<>
                                <input type="text" placeholder='historia' onClick={(e) => setTypeData('histories')}/>
                                <input type="text" placeholder='anos' onClick={(e) => setTypeData('years')}/>
                                <input type="text" placeholder='decadas' onClick={(e) => setTypeData('decades')}/>
                            </>) 
                        
                            :
                            
                            (<></>)
                        }
                    </Frame>
                </Frame>
            </Wall>
        </>

    )

}

export default CreateHistory;