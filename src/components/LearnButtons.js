import React, { useState } from 'react';

const LearnButtons = () => {
  const [number, setNumber] = useState(0);

  // const addNumber = () => {
  //   console.log(`Add`);
  //   let result = number + 1
  //   if (number >= 10) {
  //     alert(`Number tidak boleh lebih dari 10`)
  //   } else {
  //     setNumber(result)
  //   }
  //   // alert(`Number ${number}`)
  // }
  // const substractNumber = () => {
  //   console.log(`Substract`)
  //   let result = number - 1
  //   if (number <= 0) {
  //     alert(`Number tidak boleh kurang dari 0`)
  //   } else {
  //     setNumber(result)
  //   }
  // }

  const addNumber = () => number >= 10 ? alert(`Number tidak boleh lebih dari 10`) : setNumber(number + 1)

  const substractNumber = () => number <= 0 ? alert(`Number tidak boleh kurang dari 10`) : setNumber(number - 1)


  return (
    <div className="container text-center">
      <button
        onClick={() => addNumber()}
        className='btn btn-sm btn-primary' >+ Add
      </button>
      <h1>{number}</h1>
      <button
        onClick={() => substractNumber()}
        className='btn btn-sm btn-danger'> - Substract

      </button>
    </div>
  )
}

export default LearnButtons;