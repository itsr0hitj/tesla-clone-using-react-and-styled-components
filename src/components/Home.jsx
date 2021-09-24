import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
     <Container>
         <Section
         title = "Model S"
         description = "order online for touchless delivery"
         backgroundImg = "model-s.jpg"
         leftBtnText = "custom order"
         rightBtnText = "existing inventory"
         />
         <Section
         title = "Model X"
         description = "order online for touchless delivery"
         backgroundImg = "model-x.jpg"
         leftBtnText = "custom order"
         rightBtnText = "existing inventory"
         />
         <Section
         title = "Model Y"
         description = "order online for touchless delivery"
         backgroundImg = "model-y.jpg"
         leftBtnText = "custom order"
         rightBtnText = "existing inventory"
         />
         <Section
         title = "Model 3"
         description = "order online for touchless delivery"
         backgroundImg = "model-3.jpg"
         leftBtnText = "custom order"
         rightBtnText = "existing inventory"
         />
         <Section
         title = "Lowest Cost solar panel in America"
         description = "Money-back guarantee"
         backgroundImg = "solar-panel.jpg"
         leftBtnText = "Order now"
         rightBtnText = "learn more"
         />
         <Section
         title = "solar for new roof"
         description = "solar roof costs less than a new roof"
         backgroundImg = "solar-roof.jpg"
         leftBtnText = "Order now"
         rightBtnText = "learn more"
         />
         <Section
         title = "solar for new roof"
         description = "solar roof costs less than a roof"
         backgroundImg = "solar-roof.jpg"
         leftBtnText = "Order now"
         rightBtnText = "learn more"
         />
         <Section
         title = "Accessories"
         description = ""
         backgroundImg = "accessories.jpg"
         leftBtnText = "Shop Now"
         />
   
     </Container>
    )
}

export default Home
const Container = styled.div`
height;100%
`