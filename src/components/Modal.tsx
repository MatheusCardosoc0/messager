import useOtherUser from "@/hooks/useOtherUser";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, isOpen }) => {
  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog as="div" className={"relative z-50"} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="
              flex
              min-h-full
              items-center
              justify-center
              p-4
              text-center
              sm:p-0
            "
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="
                  relative
                  w-full
                  transform
                  overflow-hidden
                  rounded-lg
                  bg-white
                  px-4
                  pb-4
                  text-left
                  shadow-2xl
                  transition-all
                  sm:my-8
                  sm:w-full
                  sm:max-w-lg
                  sm:p-6
                "
              >
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    z-10
                    hidden
                    pr-4
                    pt-4
                    sm:block
                  "
                >
                  <button
                    type="button"
                    className="
                      rounded-md
                      bg-white
                      text-gray-400
                      hover:text-gray-500
                      focus:outline-none
                      focus:ring-2
                      focus:ring-sky-500
                      focus:ring-offset-2
                    "
                    onClick={onClose}
                  >
                    <span className="sr-only">Fechar</span>
                    <IoMdClose className="h-6 w-6" />
                  </button>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
