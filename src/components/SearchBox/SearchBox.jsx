import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchContainer}>
      <label htmlFor="text"> Find contacts by name </label>
      <input
        type="text"
        id="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
