import { Input, InputProps } from './input.js'

interface InputGroupProps extends InputProps {
  label: string
}

export const InputGroup = (props: InputGroupProps) => {
  const { name, label, type = 'text', placeholder } = props

  return (
    <>
      <label class="block text-sm font-medium leading-6 text-gray-900">{label}</label>
      <div class="relative mt-2 rounded-md shadow-sm">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span class="text-gray-500 sm:text-sm">$</span>
        </div>
        <Input type={type} name={name} placeholder={placeholder} />
        <div class="absolute inset-y-0 right-0 flex items-center">
          <select
            id="currency"
            name="currency"
            class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </>
  )
}
