import React from 'react'
 interface IProps {
    exercises : Object[]
 }
const List = ({exercises}:IProps) => {
  return (
    <div>
        {exercises.map((item) => <div>a</div>)}
    </div>
  )
}

export default List