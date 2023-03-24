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
    const [title,setTitle]=useState("")
    const [topic,setTopic]=useState("");
    const [subTopic,setSubtopic]=useState("");
    const [body,setBody]=useState("");
    const TopicHandler=(event)=>{
      setTopic(event.target.value);
    }
    const TitleHandler=(event)=>{
      setTitle(event.target.value);
      console.log(event.target.value);
    }
    const bodyHandler=(event)=>{
      setBody(event.target.value);
    }
    const subtopicHandler=(event)=>{
      setSubtopic(event.target.value);
    }
    const postHandler=(event)=>{
      const data={
            doubtID: 23,
            title: title,
            body: body,
            userID: "aryan",
            date: "Today",
            doubtDetail: "DETAIL DETAILS"
      };
      props.setDoubts(data);
    }
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
            
            <input type="text" placeholder='Enter Title'  onChange={TitleHandler}/>
            </div>
            <div className="item">
   
            <input type="text" placeholder='Enter Topic'  onChange={TopicHandler}/>
            </div>
    
            <div className="item">
          
            <input type="text" placeholder='Enter Subtopic'  onChange={subtopicHandler}/>
            </div>
            <div className="item">
            
            <textarea placeholder='Doubt description' onChange={bodyHandler}></textarea>
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
              <Button colorScheme="blue" mr={3} onClick={postHandler}>Post</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }