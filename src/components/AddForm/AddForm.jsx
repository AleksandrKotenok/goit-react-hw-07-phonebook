import store from "../../redux/index";
import { connect } from "react-redux";

import s from "../AddForm/AddForm.module.css";

function AddForm(props) {
  return (
    <section className={s.addForm}>
      <form className={s.form}>
        <label className={s.label} htmlFor={"name"}>
          Name:
        </label>
        <input
          id={"name"}
          className={s.input}
          type="text"
          name="INPUT_NAME"
          value={props.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={props.inputChenged}
        />
        <label className={s.label} htmlFor={"tel"}>
          Tel:
        </label>
        <input
          id={"tel"}
          className={s.input}
          type="tel"
          name="INPUT_NUMBER"
          value={props.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={props.inputChenged}
        />
        <button
          className={s.button}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            store.dispatch({ type: "ADD" });
            store.dispatch({ type: "CLEAR_FORM" });
          }}
        >
          Add contact
        </button>
      </form>
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    name: state.contactReducer.name,
    number: state.contactReducer.number,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    inputChenged: (e) => {
      const action = { type: e.target.name, text: e.target.value };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
