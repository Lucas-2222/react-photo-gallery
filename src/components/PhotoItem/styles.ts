import styled from "styled-components";

export default {
    Container: styled.div`
        width: 150px;
        height: 150px;
        border: 3px solid #000;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
        margin: 10px;
        a{
            width: 120px;
            height: 120px;
            text-decoration: none;
            color:#000;
            img{
                width: 120px;
                height: 120px;
            }
        }
    `,
    body: styled.div`
        width: 120px;
        height: 120px;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: #${props=>props.color}
    `,
}