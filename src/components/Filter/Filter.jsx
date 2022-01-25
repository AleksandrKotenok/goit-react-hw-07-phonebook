import { connect } from "react-redux";
import s from "../Filter/Filter.module.css";

function Filter(props) {
  return (
    <form className={s.form}>
      <label className={s.label} htmlFor={"filter"}>
        Find contact by name:
      </label>
      <input
        id={"filter"}
        className={s.input}
        type="text"
        name="FILTER"
        onChange={props.onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </form>
  );
}
const mapStateToProps = (state) => ({
  value: state.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => {
    const action = { type: e.target.name, text: e.target.value };
    dispatch(action);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
