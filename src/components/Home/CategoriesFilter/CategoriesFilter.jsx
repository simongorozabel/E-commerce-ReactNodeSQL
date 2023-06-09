import { useGetCategories } from "../../../hooks/queries/useGetCategories";
import { useEffect, useState } from "react";
import "./CategoriesFilter.css";
import { useRef } from "react";

const CategoriesFilter = ({
  formId,
  onChangeCategories,
  InitialCategories = [],
}) => {
  const { data, isLoading, isError, error } = useGetCategories();
  const [categoryIdList, setCategoryIdList] = useState(InitialCategories);
  const isFirstRender = useRef(true);

  const addIdToList = (categoryId) => {
    const copyList = structuredClone(categoryIdList);
    copyList.push(categoryId);

    const copyWithoutRepeats = Array.from(new Set(copyList));

    if (copyWithoutRepeats.length === data.length) {
      setCategoryIdList([]);
    } else {
      setCategoryIdList(copyWithoutRepeats);
    }
  };

  const removeIdFromList = (categoryId) => {
    const listWithoutId = categoryIdList.filter((id) => id !== categoryId);
    setCategoryIdList(listWithoutId);
  };

  const handleChange = (isChecked, categoryId) => {
    if (isChecked) {
      addIdToList(categoryId);
    } else {
      removeIdFromList(categoryId);
    }
  };

  const handleEmpty = (isChecked) => {
    if (isChecked) setCategoryIdList([]);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      onChangeCategories();
    }
  }, [categoryIdList, onChangeCategories]);

  if (isLoading) return <p>Loading Categories...</p>;
  if (isError)
    return <p>{error.message ?? "Not allowed to get categories."}</p>;

  return (
    <fieldset form={formId}>
      <legend>Categories</legend>
      <div>
        <input
          checked={categoryIdList.length === 0}
          onChange={(e) => handleEmpty(e.target.checked)}
          type="checkbox"
          name="categories"
          value=""
          id="empty-category"
          form={formId}
        />
        <label htmlFor="empty-category">All</label>
      </div>

      {data.map((category) => (
        <div key={category.id}>
          <input
            checked={categoryIdList.includes(category.id)}
            onChange={(e) => handleChange(e.target.checked, category.id)}
            type="checkbox"
            name="categories"
            value={category.id}
            id={category.id + "category"}
            form={formId}
          />
          <label htmlFor={category.id + "category"}>{category.name}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default CategoriesFilter;
