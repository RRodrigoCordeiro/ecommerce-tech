import { Dialog, Transition } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { Dispatch, Fragment, SetStateAction } from 'react'
import React from 'react'
import { FaTimes } from 'react-icons/fa'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  setModalOpened: Dispatch<SetStateAction<boolean>>
  className?: string
}

export default function Modal({
  children,
  isOpen,
  setModalOpened,
  className,
}: Props) {
  function closeModal() {
    setModalOpened(false)
  }
  console.log("Renderizou Modal")

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-BLU bg-opacity-70 " />
          </Transition.Child>

          <div className="fixed inset-0 w-auto overflow-y-auto">
            <div className="flex min-h-full min-w-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={twMerge(
                    'w-4xl transform overflow-hidden rounded-2x text-left align-middle shadow-xl transition-all bg-background-modal  bg-white',
                    className,
                  )}
                >
                  <button
                  className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-800"
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}