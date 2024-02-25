/// <reference types="@kitajs/html/alpine.d.ts" />

import { csrfField, route } from '#start/view'

interface ModalProps {
  buttonTitle: string
  title: string
  content?: string
}

const Modal = ({ title, content, buttonTitle }: ModalProps) => {
  return (
    <div x-data="{ showModal: false }">
      <button
        x-on:click="showModal = true"
        type="button"
        class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
      >
        {buttonTitle}
      </button>

      <div
        class="fixed inset-0 z-30 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
        x-show="showModal"
      >
        <div
          class="max-w-3xl px-6 py-4 mx-auto text-left bg-white rounded shadow-lg min-w-[50%]"
          data-x-transition:enter="motion-safe:ease-out duration-300"
          data-x-transition:enter-start="opacity-0 scale-90"
          data-x-transition:enter-end="opacity-100 scale-100"
        >
          <div class="flex items-center justify-between mb-5">
            <h5 class="mr-3 text-teal-600 text-2xl max-w-none">{title}</h5>
            <button x-on:click="showModal = false" type="button" class="z-50 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>{content}</div>
          <form action={route('booking.create')} method="post">
            {csrfField()}
            {/* @ts-ignore */}
            <div
              x-data
              x-init="
              flatpickr($refs.dateInput, {
              mode: 'multiple',
              'locale':'fr',
              altInput: true,
              altFormat: 'j F Y',
              dateFormat: 'd-m-Y'
            })"
              class="p-4"
            >
              <input
                name="dateInput"
                x-ref="dateInput"
                type="text"
                placeholder="Cliquez ici"
                class="w-full"
              />
            </div>
            <div class="mt-4 flex justify-end">
              <button
                class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                type="submit"
              >
                Créer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal