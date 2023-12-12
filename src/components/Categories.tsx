import React, { useState } from 'react'
const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
]

type CategoriesProps = {
  value: number;
  onClickCategory: (i: number ) => void;
}

 const Categories: React.FC<CategoriesProps> = ({value, onClickCategory}) =>  {
  
  return (
    <div className="categories">
              <ul>
                {categories.map((categoty, i) => (
                  <li key={categoty} onClick={() => onClickCategory(i)} className={value === i? 'active': '' }>{categoty}</li>
                ))}
                
                
              </ul>
            </div>
  )
}


export default Categories