import { createContext } from 'react';

interface Form {
  editingItem?: string;
  setEditingItem: (id: string) => void;
  showForm: boolean;
  setFormVisibility: (statw: boolean) => void;
}

const baseFormValue: Form = {
  showForm: false,
  setEditingItem: () => null,
  setFormVisibility: () => null,
};

export const FormContext = createContext(baseFormValue);
