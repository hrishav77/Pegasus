import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function DoubtTabs() {
    return (
    <div className="tabs">
        <Tabs isFitted variant='enclosed'>
  <TabList mb='1em' bg='rgba(255, 255, 255, 0.8)'>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Your Doubts</Tab>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Starred Doubts</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>);    
}