// const people = [
//     '凯瑟琳·约翰逊: 数学家',
//     '马里奥·莫利纳: 化学家',
//     '穆罕默德·阿卜杜勒·萨拉姆: 物理学家',
//     '珀西·莱温·朱利亚: 化学家',
//     '苏布拉马尼扬·钱德拉塞卡: 天体物理学家',
//   ];
  

    import { people } from './data.js'
    import { Fragment } from 'react';
    export default function List() {

    const chemists = people.filter(item=>{
        return item.profession === '化学家'
    })    
    const listItems = chemists.map(person =>
        <Fragment>
            <b>{person.name}:</b>
            <b>{person.profession}</b>
        </Fragment>
    );
    return <ul>{listItems}</ul>;
    }
  