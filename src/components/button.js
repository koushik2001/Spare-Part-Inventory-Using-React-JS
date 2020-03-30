import styled from 'styled-components';


export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.3rem;
background: transparent;
border: 0.05rem solid var(--mainWhite);
border-color:${props => (props.cart? "var(--mainWhite)":"var(--mainWhite)")};
color: ${props => (props.cart? "var(--mainWhite)":"var(--mainWhite)")};
border-radius: 0.3rem;
padding 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.2s ease-in-out;
&:hover{
    background: ${props => (props.cart? "var(--mainWhite)":"var(--mainWhite)")};
    color:var(--mainDark);
}
&:focus{
    outline:none;
}
`;


export const ButtonModel = styled.button`
text-transform:capitalize;
font-size: 1.3rem;
background: transparent;
border: 0.05rem solid var(--mainWhite);
border-color:${props => (props.cart? "var(--mainDark)":"var(--mainDark)")};
color: ${props => (props.cart? "var(--mainDark)":"var(--mainDark)")};
border-radius: 0.3rem;
padding 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.2s ease-in-out;
&:hover{
    background: ${props => (props.cart? "var(--mainGrey)":"var(--mainGrey)")};
    color:var(--mainDark);
}
&:focus{
    outline:none;
}
`;



