const today = new Date();

function formatDate( date ) {
    return new Intl.DateTimeFormat(
        'zh-CN',
        { weekday: 'long' }
    ).format(date);
}


function ToDoList( { person,size=100 } ) {  //这里形参还有一种写法：function ToDoList( props ) { }  //size=100是props的默认值
    const srcString = "https://i.imgur.com/yXOvdOSs.jpg";
    const atlString = "Hedy Lamarr";
    const name = 'Gregorio Y. Zara111111111';
    return (
        <>
            <h1>{ person.yourName }的待办事项</h1>
            <h1 style={ { background:'Red' } }>To Do List for {formatDate(today)}</h1>
            <img 
                src={ srcString }
                alt= { atlString }
                width= {size}
                height= {size}
                className="photo"
            />
            <ul>
                <li>发明一种新式交通信号灯</li>
                <li>排练一个电影场景</li>
                <li>改进频谱技术</li>
            </ul>
        </>
    )
}

export default ToDoList;