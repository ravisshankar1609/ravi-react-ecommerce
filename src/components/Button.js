import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
font-weight:bold;
background:transparent;
border:0.05rem solid var(--lightBlue);
border-color:${props=>
     props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
transition:all 0.5s ease-in-out;
&:hover {
    background:var(--lightBlue);
    color:var(--mainYellow);
}
&:focus{
    outline:none;
}
`

export const NavWrapper = styled.nav `
background:var(--mainBlue);
.nav-link{
    color: var(--mainWhite)!important;
    text-transform:capitalize;
    font-size:1.3rem;
    margin-left:2rem;
    color:red;
    font-weight:bold;
    &:hover{
        color:var(--mainYellow)!important;
    }
}
`;
