import {useState} from 'react'

import {
   UnlockLockContainer,
   ImageAndTextContainer,
   Image,
   Text,
   Button, 
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = isUnlocked ? 'unlock' : 'lock'
  const text = isUnlocked ? 'Your Devivce is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'lock' : 'Unlock'

  const onClickButton = () => setIsUnlocked(prevState => !prevStatus)

  return (
    <UnlockLockContainer>
      <ImageAndTextContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </ImageAndTextContainer>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>  
    </UnlockLockContainer>  
  )
}    

export default Unlock


