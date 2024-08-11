import React from 'react'

const SubsTableItem = ({email, date, mongoId, deleteSubscription}) => {

    const SubsDate = new Date(date);

  return (
    <tr className='bg-white text-left border-b'>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email? email : 'No email'}
        </th>
        <td className='px-6 py-4 hidden sm:block'>{SubsDate.toDateString()}</td>
        <td onClick={() => deleteSubscription(mongoId)} className="px-6 py-4 cursor-pointer">X</td>
    </tr>
  )
}

export default SubsTableItem