import React, { useCallback, useContext, useRef, useState } from 'react'
import styles from './Search.module.scss'
import debounce from 'lodash.debounce'
import { SearchContext } from '../../App.tsx'

const Search: React.FC = () =>  {
    const [value, setValue] = useState('')
    const {setSearchValue}:any = useContext(SearchContext)
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickClear = () => {
      setSearchValue('')
      setValue('')
      inputRef.current?.focus()

    }

    const updateSearchValue = useCallback(
      debounce(str => {
        setSearchValue(str)
      }, 1000),
      []
    )

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement> ) =>{
      setValue(event.target.value)
      updateSearchValue(event.target.value)
    }
  return (
    <div className={styles.root}>
        <svg className={styles.icon} version="1.1" id="Capa_1"  x="0px" y="0px"
	 width="612.08px" height="612.08px" viewBox="0 0 612.08 612.08" 
	 >
<g>
	<path d="M237.927,0C106.555,0,0.035,106.52,0.035,237.893c0,131.373,106.52,237.893,237.893,237.893
		c50.518,0,97.368-15.757,135.879-42.597l0.028-0.028l176.432,176.433c3.274,3.274,8.48,3.358,11.839,0l47.551-47.551
		c3.274-3.274,3.106-8.703-0.028-11.838L433.223,373.8c26.84-38.539,42.597-85.39,42.597-135.907C475.82,106.52,369.3,0,237.927,0z
		 M237.927,419.811c-100.475,0-181.918-81.443-181.918-181.918S137.453,55.975,237.927,55.975s181.918,81.443,181.918,181.918
		S338.402,419.811,237.927,419.811z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
      <input
        ref={inputRef} 
        value={value}
        className={styles.input}
        type="text" placeholder='Поиск пиццы...'
        onChange={onChangeInput} />
        
      {value && (<svg onClick={onClickClear} className={styles.closeIcon} width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <title>ic_cancel</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g id="24-px-Icons" transform="translate(-364.000000, -124.000000)" stroke="#000000">
            <g id="ic_cancel" transform="translate(360.000000, 120.000000)">
                <g id="cross">
                    <g transform="translate(5.000000, 5.000000)" stroke-width="2">
                        <path d="M0,0 L14.1421356,14.1421356" id="Line"></path>
                        <path d="M14,0 L1.77635684e-15,14" id="Line"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>)}
    </div>
  )
}
export default Search