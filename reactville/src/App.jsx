import NavBar from './components/NavBar'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function App() {
  const [mailboxes, setMailboxes] = useState([])
  const [newMailboxes, setNewMailboxes] = useState ({
    id: '', 
    boxSize: '', 
    boxHolder: ''
  })

  const addBox = (e) => {
    e.preventDefault()
    const currentMailboxes = mailboxes
    const createdMailboxes = {
      ...newMailboxes, 
      id: parseInt(mailboxes.length+1)
    }
    
    currentMailboxes.push(createdMailboxes)
    setMailboxes(currentMailboxes)
    setNewMailboxes({id: '', boxSize: '', boxHolder: ''})
  }
  const handleChange = (e)=> {
    setNewMailboxes({...newMailboxes, [e.target.name] : e.target.value})
  }


  return (
    <div className='App'>
    <header><NavBar /></header>
    <main>
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}/>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path='/new-mailbox' element={<MailboxForm
                  newMailboxes={newMailboxes}
                  handleChange={handleChange}
                  addBox={addBox}
                  /> } />
        <Route path='/mailboxes/:id' element={<MailboxDetails/>}/>
      </Routes>
    </main>
    </div>
  )
}

export default App
