import css from "./ContaktForm.module.css";

export default function ContactForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      name: e.target.elements.text.value,
      number: e.target.elements.tel.value,
    });
    e.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="text">Name</label>
      <input type="text" name="text" id="text" />
      <label htmlFor="tel">Number</label>
      <input type="tel" name="tel" id="tel" />
      <button type="submit">Add contact</button>
    </form>
  );
}
