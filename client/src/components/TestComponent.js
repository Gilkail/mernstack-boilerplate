import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewTest, addNewDbTest, getDbTests } from '../actions/testActions'

class TestComponent extends Component {
    componentDidMount() {
        this.props.getDbTests()
    }
    onClickTestDb = () => {
        this.props.addNewDbTest()
    }
    onClickTestRedux = () => {
        const currentDate = new Date()
        const testData = { text: `Client - Redux test made on ${currentDate}` }
        this.props.addNewTest(testData)
    }
    render() {
        const allTest = this.props.tests
        const test_container = allTest.map((test, index) => (
            <li key={index}>{test.text}</li>
        ))

        return (
            <div>
                <button type="button" onClick={this.onClickTestRedux}>Test Client</button>
                <button type="button" onClick={this.onClickTestDb}>Test DB</button>
                <ul>
                    {test_container}
                </ul>

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    tests: state.tests
})

export default connect(mapStateToProps, { addNewTest, addNewDbTest, getDbTests })(TestComponent)