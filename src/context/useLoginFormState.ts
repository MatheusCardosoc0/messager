import { create } from 'zustand'

interface useLoginFormStateProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export const useLoginFormState = create<useLoginFormStateProps>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
}))
