import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
  import { Button } from '@chakra-ui/react'
  import "./Overlay.css"

  export default function Overlay() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>
            Post doubts
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Write your doubts</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form >
        <div className="items">
            <div className="item">
            
            <input type="text" placeholder='Enter Title'/>
            </div>
            <div className="item">
   
            <input type="text" placeholder='Enter Topic'/>
            </div>
    
            <div className="item">
          
            <input type="text" placeholder='Enter Subtopic' />
            </div>
            <div className="item">
            
            <textarea placeholder='Doubt description'></textarea>
            </div>
        
        </div>
        <div className="new-expense__actions">
        </div>
    </form>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue" mr={3}>Post</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }