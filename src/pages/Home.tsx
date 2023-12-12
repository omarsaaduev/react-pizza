import React, { useEffect } from "react";
import Categories from "../components/Categories.tsx";
import Sort from "../components/Sort.tsx";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock.tsx";
import { Skeleton } from "../components/PizzaBlock/Skeleton.tsx";
import { useSelector } from "react-redux";
import { setCategoryId } from "../redux/slice/filterSlice.ts";
import { fetchPizzas } from "../redux/slice/pizzaSlice.ts";
import { Link } from "react-router-dom";
import { RootState, useAppDispatch } from "../redux/store.ts";

type HomeProps = {
  searchValue: string
}

 const Home: React.FC<HomeProps> = ({ searchValue }) => {
  const dispatch = useAppDispatch();
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);
  const sortType = useSelector((state:RootState) => state.filter.sort.sortProperty);
  const { items, status } = useSelector((state:RootState) => state.pizza);

  const onChangeCategory = (id: number ) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    getPizzas();
  }, [categoryId, sortType, searchValue]);

  const getPizzas = async () => {
    dispatch(
      
      fetchPizzas({
        categoryId,
        sortType,
      }),
    );
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка</h2>
          <p>
            К сожалению, не удалось получить питсы. Попробуйте повторить попытку
            позже
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading"
            ? [...Array(6)].map((_, i) => <Skeleton key={i} />)
            : items
                .filter((obj) => {
                  return obj.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
                .map((object) => (
                  
                    <PizzaBlock {...object} />
                  
                ))}
        </div>
      )}
    </>
  );
}

export default Home