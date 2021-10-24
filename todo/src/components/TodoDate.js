import Card from "../UI/Card";

const TodoDate = (props) => {
    // reformat the date
    const [month, day, year] = [props.date.getMonth(), props.date.getDate(), props.date.getFullYear()];

    return (
        <Card className="py-0">
            <div className="has-text-centered">
                <small>{month}</small>
                <div className="is-size-5">{day}</div>
                <small>{year}</small>
            </div>
        </Card>
    )
}


export default TodoDate;