const listStyle = {
    border: '1px solid black',
    height: '50px',
    width: '200px',
    textAlign: 'center',
    lineHeight: '50px',
}

const incrementCount = (item) => {
    item.count++;
    ReactDOM.render(<List items={ballot} />, document.getElementById('app'));
}

const List = (props) => {
    const sortedList = props.items.sort((a, b) => {
        return b.count - a.count;
    })

    const listItems = props.items.map((itemString) => {
        return <li key={itemString.name} style={listStyle} onClick={() => incrementCount(itemString)} >{itemString.count} -- {itemString.name}</li>
    });
    return (
        <div>
            <h1> Vote Your JS Library! </h1>
            <ul style={{ listStyleType: 'none' }}>
                {listItems}
            </ul>
        </div>
    )
}


const ballot = [{ name: 'React', count: 0 }, { name: 'Vue', count: 0 }, { name: 'Angular', count: 0 }, { name: 'Ember', count: 0 }]

ReactDOM.render(<List items={ballot} />, document.getElementById('app'));
