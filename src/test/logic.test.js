/* eslint-disable */

const Task = require('../modules/task')

it('check class', () => {
    expect(new Task('Buy','10/10/2020', 'normal', 'Buy PC')
    )      
}).toBe('Buy','10/10/2020', 'normal', 'Buy PC')