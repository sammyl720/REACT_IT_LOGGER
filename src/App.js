import React, { useEffect, Fragment } from 'react'
import SearchBar from './components/layout/SearchBar'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTech'
import TechListModal from './components/techs/TechListModal'
const App = () => {
  useEffect(() => {
    // initailizes materialize javascript
    M.AutoInit()
  })
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <Logs />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
      </div>
    </Fragment>
  )
}

export default App
