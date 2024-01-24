import React, {useState} from 'react';
import Link from 'next/link';
import Style from '../Navbar/Navbar.module.css'
import { Frame, Wall } from '../../Layout/layout';
import { H2Text, PText, } from "../../Items/Texts/texts";
import { Button } from '../../Items/Button/button';
import { useDispatch, useSelector } from 'react-redux';
import { firstButtonAction, secondButtonAction, thirdButtonAction } from '@/redux/action';

/* import Layout from '../layout';*/

const Navbar = (props) => {

    const [openNav, setOpenNav] = useState(false);

    let firstButton = 'Geral';
    let secondButton = 'Galp Solar';
    let thirdButton = 'Wallbox';

    const openFirstButton = useSelector(state => state.firstButtonReducer.stateButton)
    const openSecondButton = useSelector(state => state.secondButtonReducer.stateButton);
    const openThirdButton = useSelector(state => state.thirdButtonReducer.stateButton);

    const handleClose = () => {
        setOpenNav(!openNav);
    }

    const dispatch = useDispatch();

    const handleFirstButton = (openFirstButton) => {
        dispatch(firstButtonAction(!openFirstButton));
        dispatch(secondButtonAction(false))
        dispatch(thirdButtonAction(false))
    }

    const handleSecondButton = (openSecondButton) => {
        dispatch(secondButtonAction(!openSecondButton))
        dispatch(firstButtonAction(false))
        dispatch(thirdButtonAction(false))
    }

    const handleThirdButton = (openThirdButton) => {
        dispatch(thirdButtonAction(!openThirdButton))
        dispatch(firstButtonAction(false))
        dispatch(secondButtonAction(false))
    }

    return (
        <>
            <Wall wall={Style.wall}>
                <Frame>
                    <H2Text h2Text={props.title}/>
                </Frame>
                <Frame frame={Style.frame}>
                    <Frame frame={Style.frameNav}>
                        <Button buttonText={firstButton} buttonStyle={Style.button} buttonClick={() => handleFirstButton(openFirstButton)}/>
                        <Button buttonText={secondButton} buttonStyle={Style.button} buttonClick={() => handleSecondButton(openSecondButton)}/>
                        <Button buttonText={thirdButton} buttonStyle={Style.button} buttonClick={() => handleThirdButton(openThirdButton)}/>
                    </Frame>
                    <Frame frame={Style.frameIcon}>
                        <Button buttonText="|||"  buttonStyle={Style.buttonIcon} buttonClick={() => setOpenNav(!openNav)}/>
                    </Frame>
                </Frame>
                    {openNav ? (<>
                        <Frame frame={Style.frameMenuReponsive}> 
                            <ul>
                                <Link href="#home" onClick={handleClose}><PText pText="Home" pStyle={Style.linkStyle}/></Link>
                                <Link href="#services" onClick={handleClose}><PText pText="Serviços" pStyle={Style.linkStyle}/></Link>
                                <Link href="#benefits" onClick={handleClose}><PText pText="Benefícios" pStyle={Style.linkStyle}/></Link>
                                <Link href="#footer" onClick={handleClose}><PText pText="Promoção" pStyle={Style.linkStyle}/></Link>
                            </ul>
                        </Frame>
                    </>) : (<></>)}
            </Wall>
        </>
    )
}

export default Navbar