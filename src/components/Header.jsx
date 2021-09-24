import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                    <a href="">model s</a>
                    <a href="">model x</a>
                    <a href="">model y</a>
                    <a href="">model 3</a>
            </Menu>
            <RightMenu>
                <a href="">Shop</a>
                <a href="">Tesla Account</a>
                <CustomMenu/>
            </RightMenu>
        </Container>
    )
}

export default Header;
const Container = styled.div`
min-height: 60px;
position: fixed;
top: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
`
const Menu = styled.div`
display:flex;
align-items:center;
flex: 1;
justify-content: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
}
@media(max-width: 768px){
    display: none;
}
`
const RightMenu = styled.div`
display: flex;
align-itmes: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
}
`
const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`