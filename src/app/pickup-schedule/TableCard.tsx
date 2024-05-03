import React from 'react'
import Card from './card'
import Table from './table'

function TableCard() {
  return (
    <div className="flex flex-row border-t border-gray-200 pt-3  pb-2" >
    <div className="pr-10">
      <Card />
    </div>
    <Table />
  </div>
  )
}

export default TableCard