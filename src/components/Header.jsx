import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCar} from '../features/car/carSlice'
import {useSelector} from 'react-redux'
const Header = () => {
    const cars = useSelector(selectCar);
    const [burgerStatus, setburgerStatus] = useState(false);
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index) =>(
                    <a key = {index}href="">{car.title}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="">Shop</a>
                <a href="">Tesla Account</a>
                <CustomMenu onClick = {() => setburgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show = {burgerStatus} >
                <CloseWrapper>
                <CustomClose onClick = {() => setburgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) =>(
                    <li key = {index}> <a href="">{car.title}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
            </BurgerNav>
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
z-index: 1;
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
const BurgerNav = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
background: white;
width: 300px;
list-style: none;
transform: ${props => props.show? "translateX(0%)": "translateX(100%)"};
transition: transform 0.3s;
padding: 20px;
li{
    padding 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    a{
        font-weight: 600;
    }
`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`