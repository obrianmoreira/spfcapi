import Style from '../Form/Form.module.css';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Wall, Frame } from '../../Layout/layout';
import { Button } from '@/components/Items/Button/button';
import { addDoc, collection, getDoc, doc, getDocs } from 'firebase/firestore';
import { database } from '@/app/api/firebaseConfig';

const Form = () => {

    const firstState = useSelector(state => state.firstButtonReducer.stateButton)
    const secondState = useSelector(state => state.secondButtonReducer.stateButton)
    const thirdState = useSelector(state => state.thirdButtonReducer.stateButton)
    
    const dbInstance = collection(database, 'leads');

    return (
        <>
    
            <Wall wall={Style.wall}>
                <Frame frame={Style.frame}>
                    { Boolean(firstState) ? (
                    <>
                        <AddData dbInstance={dbInstance}/>
                        <ReadData dbInstance={dbInstance}/>
                    </>
                    ): (<></>)}
                    { Boolean(secondState) ? (
                    <>
                        <br /><br /><br /><br /><br /><br /><br />
                        <h1>Hi, World!</h1>
                    </>
                    ): (<></>)}
                    { Boolean(thirdState) ? (
                    <>
                        <br /><br /><br /><br /><br /><br /><br />
                        <h1>Hei, World!</h1>
                    </>
                    ): (<></>)}
                </Frame>
            </Wall>
    
        </>
    )
}

export const AddData = (props) => {

    const [leadName, setLeadName] = useState('');
    const [leadEmail, setLeadEmail] = useState('');
    const [leadPhone, setLeadPhone] = useState('');
    const [leadAdress, setLeadAdress] = useState('');

    function redirect () {
        console.log('Nice! Worked');
    }

    const saveLeads = () => {

        addDoc(props.dbInstance, {

            leadName: leadName,
            leadEmail: leadEmail,
            leadPhone: leadPhone,
            leadAdress: leadAdress,

        }).then(() => {

            setLeadName(''),
            setLeadEmail(''),
            setLeadPhone(''),
            setLeadAdress(''),
            redirect()

        });

    }

    return (
        <>
        
            <Wall>
                <Frame>
                    <input type="text" placeholder='Nome e Sobrenome' onChange={(e) => setLeadName(e.target.value)} value={leadName}/>
                    <input type="text" placeholder='Email' onChange={(e) => setLeadEmail(e.target.value)} value={leadEmail}/>
                    <input type="text" placeholder='Telefone' onChange={(e) => setLeadPhone(e.target.value)} value={leadPhone}/>
                    <input type="text" placeholder='Endereço' onChange={(e) => setLeadAdress(e.target.value)} value={leadAdress}/>
                    <Button buttonText={'Submit'} buttonClick={saveLeads}/>
                </Frame>
            </Wall>
        
        </>
    )
    
}

const ReadData = (props) => {

    const [leadsData, setLeadsData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(props.dbInstance);
                const leadsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setLeadsData(leadsData);
            } catch (error) {
                console.error('error', error);
            }
        }

        fetchData();

    }, [props.dbInstance])

    return (
        <>
                <Frame>
                    <table id={Style.tableStyle}>
                        <tr id={Style.collumStyle}>
                            <th>Nome e Sobrenome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                        </tr>
                        {leadsData.map((lead) => (
                            <>
                                
                                <tr>
                                    <td>{lead.leadName}</td>
                                    <td>{lead.leadEmail}</td>
                                    <td>{lead.leadPhone}</td>
                                    <td>{lead.leadAdress}</td>
                                </tr>
                            </>
                        ))}
                    </table>
                </Frame>
        
        </>
    )
    
}

export default Form;