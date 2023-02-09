import React, {useEffect} from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Container = styled.div`
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    display:none;
    transition:opacity ease 1s;
    justify-content: center;
    align-items: center;
    overflow-y:auto;
    background-color:#000;
    opacity:0;
`;

const WindowArea = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    left:40%;
    flex-direction:column;
    transition:opacity ease 1s;
    top:40%;
    bottom:40%;
    right:40%;
    background-color:trasnparent;
    opacity:0;
    position:fixed;
`;



export const Loading = (props) =>{
    return(
        <div style={{display:'flex', width:'100%', height:'100%',  flex:1, justifyContent:'center', alignItems:'center'}}>
            <ReactLoading type="spinningBubbles" color={props.color ? props.color : '#FF0000'} height={props.heght ? props.height : '5%'} width={props.width ? props.width : '5%'}/>
        </div>
    );
}

export const LoadTela = (props) => {

    useEffect(()=>{
        if(props.visible){
            document.querySelector('.WindowBody').style.opacity = 0.3;
            document.querySelector('.WindowArea').style.opacity = 1;
        }else{
            document.querySelector('.WindowBody').style.opacity = 0;
            document.querySelector('.WindowArea').style.opacity = 0;
        }
    },[props.visible])
    return(
        <>
            <Container className="WindowBody" style={{display: props.visible ? 'flex' : 'none'}}></Container>
            <WindowArea className="WindowArea">
                <ReactLoading type="spinningBubbles" color={props.color ? props.color : '#FF0000'} height={props.heght ? props.height : '40px'} width={props.width ? props.width : '40px'}/>
            </WindowArea>
        </>
    )
}