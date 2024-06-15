import React, {useState} from 'react'

const TestPage = () => {

    const [testOne, setTestOne] = useState(5);
    const [testTwo, setTestTwo] = useState();
    const [testThree, setTestThree] = useState();
    const [testFour, setTestFour] = useState();
    
    console.log(testOne, testTwo, testThree, testFour)


  return (
    <div>
          <button className='block mb-4' onClick={() => setTestOne(1)}>test1</button>
          <button className='block mb-4' onClick={() => setTestTwo(2)}>test2</button>
          <button className='block mb-4' onClick={() => setTestThree(3)}>test3</button>
            <button className='block mb-4' onClick={() => setTestFour(4)}>test4</button>
    </div>
  )
}

export default TestPage
