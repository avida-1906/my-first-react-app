function Item( { isPacked, name } ) {
    if(isPacked){
        return <li className="item">{name}✔</li>
    }
    return <li className="item">{name}</li>
}


function PackingList() {
    return (
        <section>
            <h1>SALLY RIDE 的物品清单</h1>
            <Item isPacked={true} name={'头盔'} />
            <Item isPacked={true} name={'口罩'} />
            <Item isPacked={false} name={'防弹衣'} />
        </section>
    )
}

export default PackingList;