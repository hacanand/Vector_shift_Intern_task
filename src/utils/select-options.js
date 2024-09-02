import React from 'react'

const SelectOptions = ({label,title,data}) => {
  return (
    <div>
      <label
        for={label}
        class="block mb-1 text-sm font-medium capitalize text-gray-800 "
      >
        {label}
      </label>
      <select
        id={label}
        class="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>{title}</option>
        {data.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectOptions