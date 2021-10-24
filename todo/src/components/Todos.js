import './Todos.css'

import Todo from './Todo';

import Card from '../UI/Card';

const Todos = (props) => {
    return (
        <Card>
            <h3>My Todos</h3>
            {props.tasks.map((task) => {
                return (
                    <Card className="has-background-dark mb-2">
                        <Todo task={task}></Todo>
                    </Card>
                )
            })}
            
        </Card>
    )
}

export default Todos;