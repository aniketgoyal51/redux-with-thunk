import './App.css'
import { Provider } from 'react-redux'
import Display from './components/Display'
import { myStore } from './redux/Store'

function App() {

  return (
    <>
      <Provider store={myStore}>
        <Display/>
      </Provider>
    </>
  )
}

export default App
