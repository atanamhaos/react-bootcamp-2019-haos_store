        function black(){
            return React.createElement('div', { style: { backgroundColor:'black', height:'50px', width:'50px', display: 'inline-block' }})
        }
        function red(){
            return React.createElement('div', { style: { backgroundColor:'red', height:'50px', width:'50px', display: 'inline-block' }})
        }
        function br(){
            return React.createElement('br', null, null);
        }
        const world = [];
        for(var i=0; i<10; i++){
            for(var x=0; x<10; x++){
                if((x+i)%2) world.push(black())
                else world.push(red())
            }
            world.push(br());
        }
        const div = React.createElement('div', null, world);
        ReactDOM.render(div, document.getElementById('app'));

        Events
        const buttonProps = {
            onClick(){ alert("You clicked me!"); }
        }
        const button = React.createElement('button', buttonProps, 'Click me!');
        const div = React.createElement('div', null, button);
        ReactDOM.render(div, document.getElementById('app'));