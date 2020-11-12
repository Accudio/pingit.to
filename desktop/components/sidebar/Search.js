import { useState } from 'react'

import { SearchIcon } from '@common/components/Icons/'

import styles from 'styles/components/sidebar/search.module.scss'

export default function Search() {
  const [ searchText, setSearchText ] = useState(null)

  return (
    <form
      method="get"
      action="https://duckduckgo.com/"
      className={styles.form}
      onSubmit={e => {
        if (!searchText) e.preventDefault()
      }}
    >
      <label htmlFor="search" className={`pad-left-300 text-300 ${styles.label}`}>Search with DuckDuckGo</label>
      <input
        id="search"
        className={styles.input}
        type="search"
        name="q"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        autoFocus
      />
      <button type="submit" className={`button ${styles.button}`} >
        <SearchIcon />
        <span className="sr-text">Search</span>
      </button>
    </form>
  )
}
