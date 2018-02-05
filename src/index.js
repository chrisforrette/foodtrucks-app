import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './styles/reset.css'
import App from './components/pages/App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
