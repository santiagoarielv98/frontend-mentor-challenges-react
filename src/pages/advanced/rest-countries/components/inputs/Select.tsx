import React from 'react'

import ChevronDown from '../icons/ChevronDown'

interface SelectProps extends React.HTMLProps<HTMLInputElement> {}

const initialLabel = (child: React.ReactNode, value?: string | number | readonly string[]): React.ReactNode => {
  if (child === undefined) return ''
  const option = React.Children.toArray(child).find((child) => (child as React.ReactElement).props.value === value)
  return (option as React.ReactElement).props.children
}

const Select: React.FC<SelectProps> = ({ children, id, value, onChange }) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const [label, setLabel] = React.useState<React.ReactNode>(() => initialLabel(children, value))

  const handleClick = (ev: React.MouseEvent<HTMLUListElement>): void => {
    const inputCurr = inputRef.current as HTMLInputElement
    const liElement = ev.target as HTMLLIElement
    const value = liElement.dataset.value as string

    setLabel(liElement.children[0].textContent)

    inputCurr.value = value
    inputCurr.dispatchEvent(new Event('input', { bubbles: true }))
  }

  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(ev)
  }

  return (
    <label className="inline-flex w-full max-w-[12.5rem] relative shadow-md rounded-md dark:bg-gray-800">
      <input id={id} className="peer sr-only" type="checkbox" />
      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
        <ChevronDown className="w-5 h-5" />
      </div>
      <label
        className="w-full px-6 py-4 text-sm rounded-md cursor-pointer peer-checked:ring-2 peer-checked:ring-gray-300 hover:ring-2 hover:ring-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-300"
        htmlFor={id}
      >
        {label}
      </label>
      <input type="hidden" value={value} ref={inputRef} onInput={handleInput} />
      <ul
        className="invisible absolute inset-x-0 top-full mt-2 py-3 peer-checked:visible shadow-2xl bg-white cursor-pointer dark:bg-gray-800 rounded-md z-10"
        role="listbox"
        aria-orientation="vertical"
        aria-labelledby="filter"
        onClick={handleClick}
      >
        {children}
      </ul>
    </label>
  )
}

export default Select
