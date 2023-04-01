import React from 'react'

const ToggleSwitch = ({ checked }) => {
  const [check, setCheck] = React.useState(checked)

  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={check}
          onChange={() => setCheck(!check)}
          className='form-switch is-outline h-5 w-10 rounded-full border border-slate-400/70 bg-slate-100 before:rounded-full before:bg-slate-300 checked:!border-success checked:before:!bg-success dark:border-navy-500 dark:bg-navy-900 dark:before:bg-navy-400'
        />
      </label>
    </div>
  )
}

export default ToggleSwitch
