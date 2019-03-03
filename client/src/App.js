import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import TestComponent from './components/TestComponent'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Test boilerplate</h1>
                            <TestComponent />
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default App;