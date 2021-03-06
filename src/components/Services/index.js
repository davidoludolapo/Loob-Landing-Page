import React from 'react'
import Icon1 from '../../images/4.svg'
import Icon2 from '../../images/3.svg'
import Icon3 from '../../images/7.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesIcon, ServicesH2, ServicesP, ServicesCard} from './ServicesElements'

function Services() {
  return (
    <>
        <ServicesContainer id="services">
            <ServicesH1>What we Offer</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>LoremIpsum</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>LoremIpsum</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>PLoremIpsum</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services