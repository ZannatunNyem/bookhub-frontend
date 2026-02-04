import React from 'react'

export default function SingleCart({item}) {
  return (
 <tr>
      <th className="hidden sm:table-cell">
        <label>
          <input type="checkbox" className="checkbox " />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{item.title}</div>
            <div className="text-sm opacity-50">{item.author}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{item.category}</span>
      </td>
      <td>${item.price}</td>

    </tr>
  )
}
