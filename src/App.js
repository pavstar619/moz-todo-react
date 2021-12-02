import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App(props) {
  const taskList = props.tasks.map(task => (<Todo name={task.name} completed={task.completed} id={task.id} key={task.id}/>));
  // console.log(taskList)
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {/* <Todo name="Task1" completed={true} id="todo-0"/>
        <Todo name="Task2" completed={false} id="todo-1"/>
        <Todo name="Task3" completed={false} id="todo-2"/> */}
        {taskList}
        
      
      </ul>
    </div>
  );
}


export default App;
