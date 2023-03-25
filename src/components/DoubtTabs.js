import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function DoubtTabs() {
    return (
    <div className="tabs">
        <Tabs size='md' variant='enclosed'>
    <TabList>
        <Tab>Your Doubts</Tab>
        <Tab>Starred Doubts</Tab>
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