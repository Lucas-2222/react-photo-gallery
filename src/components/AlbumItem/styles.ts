import styled from 'styled-components';

export default {
    Container: styled.div`
        background-color: #ffff;
        display:flex;
        width:100%;
        flex-wrap:wrap;
        border-radius:5px;
        margin-bottom:10px;
        
        .album{
            width:100%;
            border: 2px solid #000;
            padding: 20px;
            cursor: pointer;
            transition: all ease .1s;
            text-decoration:none;
            color:#000;

            &:hover{
            background-color: #CCC;
            
            }

        }
    `,   
}