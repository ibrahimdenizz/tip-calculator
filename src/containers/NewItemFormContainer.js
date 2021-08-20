import { connect } from 'react-redux';
import NewItemForm from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

const mapDispatchProps = {
  onSubmit: (name, price) => addNewItem(name, price)
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchProps
)(NewItemForm);
