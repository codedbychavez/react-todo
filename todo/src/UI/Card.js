import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            <div className='card-content'>
                <div className='content'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Card;