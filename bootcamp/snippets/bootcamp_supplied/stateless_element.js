const List = (props) => {

    const items = props.items.map( (item, idx) => {
        return <li>{item}</li>;
    });

    return (
        <ul>
            {items}
        </ul>
    )
}
ReactDOM.render(<List x="123" y="asdf" items= { ['React', 'Redux', 'Node', 'Express'] } />, document.getElementById('app'));