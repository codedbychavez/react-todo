import './Todo.css';
import TodoDate from './TodoDate';


const Todo = (props) => {
    return (
        <div className="columns is-flex is-align-content-center">
            <TodoDate date={props.task.date} className="column"></TodoDate>
            <div className="column is-align-self-center">
                <p className="has-text-white is-size-4">{props.task.name}</p>
            </div>
        </div>
    )
}

export default Todo;