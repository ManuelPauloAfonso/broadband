import styled from "styled-components";



export const Container = styled.main`

display: flex;
justify-content: center;
align-items: center;
height: 100vh;
gap: 6.938rem;

h1{
    color: white;
    font-size: 3.375rem;
    line-height: 81px;
    color: #E5E5E5;
}
.pa{
    line-height: 27px;
    color: #7A797E;
    font-size: 1.125rem;
}

.container-form{

background: #1E1E1E;
border-radius: 6px;
width: 30rem;
height: 27rem;
}

form{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    margin-top: 4rem;
    .errors{
        color: red;
        font-size: 0.800rem;
    }
    .p{
        color: #7A797E;
        margin-top: 1.5rem;

        a{
            color: #723DEC;
        }
    }

    input{
        width: 22rem;
        height: 3.125rem;
        border-radius: 5px;
        background: #161616;
        border: none;
        padding-left: 1rem;


    }
    button{
        width: 22rem;
        height: 3.125rem;
        border-radius: 5px;
        background: #723DEC;


        font-size: 1rem;
        line-height: 24px;
        color: #FFFFFF;
        border: none;
        margin-top: 3.313rem;

    }
}


`