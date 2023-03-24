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
            <label>title</label>
            <input type="text" />
            </div>
            <div className="item">
            <label>Topic</label>
            <input type="text" min='0.01' step='0.01'/>
            </div>
    
            <div className="item">
            <label>Subtopic</label>
            <input type="text" min="2022-12-31" max="2023-5-2-31" />
            </div>
            <div className="item">
            <label>Doubt description</label>
            <textarea></textarea>
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
              <Button variant='ghost'>Post</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }