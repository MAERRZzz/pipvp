function User(props) {
    return (
        <div>
            <p>Имя: {props.name}</p>
            <p>Возраст: {props.age}</p>
        </div>
    );
}

export default User;