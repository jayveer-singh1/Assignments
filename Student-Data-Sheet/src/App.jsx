import { useReducer } from 'react';
import './App.css';

const initialState = {
  student: { name: '', class: '', fees: '' },
  students: [],
  isEditing: false,
  currentId: null,
};

const reducer = (state, action) => {
  const actions = {
    SetStudent: () => ({ ...state, student: action.payload }),
    AddStudent: () => {
      const newStudent = { id: state.students.length + 1, ...state.student };
      const students = state.isEditing
        ? state.students.map((item) => (item.id === state.currentId ? newStudent : item))
        : [...state.students, newStudent];
      return {
        ...state,
        students,
        student: { name: '', class: '', fees: '' },
        isEditing: false,
        currentId: null,
      };
    },
    EditStudent: () => {
      const studentToEdit = state.students.find((i) => i.id === action.payload);
      return {
        ...state,
        student: { name: studentToEdit.name, class: studentToEdit.class, fees: studentToEdit.fees },
        isEditing: true,
        currentId: action.payload,
      };
    },
    DeleteStudent: () => ({
      ...state,
      students: state.students.filter((item) => item.id !== action.payload),
    }),
  };
  return (actions[action.type] || (() => state))();
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const ChangeData = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SetStudent', payload: { ...state.student, [name]: value } });
  };

  const AddOrUpdate = () => {
    if (state.student.name || state.student.class || state.student.fees) {
      dispatch({ type: 'AddStudent' });
    }
  };

  return (
    <>
      <h1>Student Data</h1>
      <hr />
      <div className='left'>
        <label htmlFor="">Name :</label><input
          name="name"
          onChange={ChangeData}
          value={state.student.name}
          type="text"
          placeholder='Ex:- Jayveer Singh'
        /> <br />
        <label htmlFor="">Class :</label><input
          name="class"
          onChange={ChangeData}
          value={state.student.class}
          type="text"
          placeholder='Class'
        /> <br />
        <label htmlFor="">Fees :</label><input
          name="fees"
          onChange={ChangeData}
          value={state.student.fees}
          type="text"
          placeholder='Fees'
        /> <br />
        <button onClick={AddOrUpdate} className='addupdate'>
          {state.isEditing ? 'Update' : "Add"}
        </button>
        </div>
        <div className='right'>
        <h2>Student Sheet</h2>
        <table border={'1px'}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Class</th>
              <th>Fees</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {state.students.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.class}</td>
                <td>{item.fees}</td>
                <td>
                  <button onClick={() => dispatch({ type: 'EditStudent', payload: item.id })}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => dispatch({ type: 'DeleteStudent', payload: item.id })}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </>
  );
}

export default App;
