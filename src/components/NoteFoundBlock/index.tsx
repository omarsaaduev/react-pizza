import React from 'react'
import NoteFound from '../../pages/NoteFound'
import styles from './NoteFoundBlock.module.scss'

 const NoteFoundBlock: React.FC = () =>  {
  return (
    <h1 className={styles.root}>
        <span>😑</span>
        <br />
        Ничего не найдено
    </h1>
  )
}
export default NoteFoundBlock