import Image from 'next/image'
import styled from 'styled-components'

 const TitleImageMobileContainer = styled.div`
 position: absolute;
 top: 10vh;
 left:0;
 width: 100vw;
 height: 70vh;
 `

function TitleImageMobile() {
    
    return (
<TitleImageMobileContainer>
    {/* <Image src={imageUrl} layout="fill" alt = "Title Image--Mobile"></Image> */}
</TitleImageMobileContainer>
    )
}



export default TitleImageMobile