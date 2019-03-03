import axios from 'axios'

// Set current user
export const addNewTest = (testData) => {
    return ({
        type: 'ADD_TEST',
        payload: testData
    })
}

// Add new test to reducer

// Add new DB test
export const addNewDbTest = () => dispatch => {
    const currentDate = new Date()
    const newTest = { text: `Server - Redux test made on ${currentDate}` }
    axios.post('/api/tests', newTest)
        .then(res => dispatch(addNewTest(res.data)))
        .catch(err => console.log(err));
}

export const getTests = (testsData) => {
    return ({
        type: 'GET_TESTS',
        payload: testsData
    })
}

// Get tests from db
export const getDbTests = () => dispatch => {
    axios.get('/api/tests')
        .then(res => dispatch(getTests(res.data)))
        .catch(err => console.log(err))
}