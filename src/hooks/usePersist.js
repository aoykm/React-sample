import { useState, useEffect } from 'react'

export const usePersist = STORAGE_KEY => {
  const save = localStorage.getItem(STORAGE_KEY)
  const initialValue = JSON.parse(save)

  const [books, setBooks] = useState(initialValue || [])
  const [newBook, setNewBook] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
    //eslint-disable-next-line
  }, [books])

  return [books, setBooks, newBook, setNewBook]
}
