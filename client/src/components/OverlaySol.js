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
  import { useState } from 'react'

  export default function Overlay(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [body,setBody]=useState("");
 

    const bodyHandler=(event)=>{
      setBody(event.target.value);
    }
    
  
    const postHandler=(event)=>{
      const data={
        body: body,
        username: props.username
      };
      props.postSolution(data);
    }
    return (
      <>
         
        <Button onClick={onOpen} >
           <div className='but'>Post your solutions</div> 
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>write your solution</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form >
        <div className="items">
            <div className="item">
            <textarea placeholder='Doubt description' onChange={bodyHandler}></textarea>
            </div>
        </div>
        <div className="item">
            <label htmlFor="filename">Add a image</label>
        <input className='upload' type="file" id="myFile" name="filename"/>
            </div>
        
      
    </form>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue" mr={3} onClick={postHandler}>Post</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }