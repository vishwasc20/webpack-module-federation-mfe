import { useState } from 'react';

export default function useStateOpen(defaultValue = false) {
 const [open, setOpen] = useState(defaultValue);

  return [open, setOpen];
}