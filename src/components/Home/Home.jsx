import { useCallback, useEffect, useId, useRef, useState } from "react";
import CategoriesFilter from "./CategoriesFilter/CategoriesFilter";
import "./Home.css";
import ProductList from "./ProductList/ProductList";
import { Form, useLoaderData, useSubmit } from "react-router-dom";
const Home = () => {
  const formId = useId();
  const submit = useSubmit();
  const formRef = useRef();
  const { categories, title } = useLoaderData();
  const [titleValue, setTitleValue] = useState(title);

  const handleChangeCategories = useCallback(() => {
    if (!formRef.current) {
      return;
    } else {
      submit(formRef.current);
    }
  }, [submit]);

  useEffect(() => {
    setTitleValue(title);
  }, [title]);

  return (
    <div className="home__container">
      <aside>
        ^
        <CategoriesFilter
          formId={formId}
          onChangeCategories={handleChangeCategories}
          InitialCategories={categories}
        />
      </aside>

      <section className="productsContainer">
        <Form id={formId} ref={formRef}>
          <input
            className="homeSearchInput"
            type="search"
            name="title"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            placeholder="Search..."
          />
        </Form>

        <ProductList categories={categories} title={title} />
      </section>
    </div>
  );
};

export default Home;
