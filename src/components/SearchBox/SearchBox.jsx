import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox; 