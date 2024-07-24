/* 
  这个是根组件，相当于vue里边的App.vue
*/

// import logo from './logo.svg';
import './App.css';

import ChildSecond from './ChildSecond';
import { ChildThird } from './ChildThird';
import ToDoList from './ToDoList.js'

// function Child() {
//   return (
//     <h1>你好世界</h1>
//   )
// }

// function App() {  //组件名称必须是以大写字母开头的
//   // return ( //return关键字和标签如果不在同一行的话就要使用圆括号
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <p>
//   //         第一个react项目
//   //       </p>
//   //     </header>
//   //   </div>
//   // );
//   //这里return出一堆html标签，这就是jsx语法
//   return  <div className="App">
//             {/* <header className="App-header">
//               <p>
//                 第一个react项目
//               </p>
//               <Child />
//               <ChildSecond/>
//               <ChildThird/>
//             </header> */}
//             {/* 在挂载子组件的位置通过添加属性的方式给子组件传值 */}
//             {/* <ToDoList person={ {yourName:'张三'} } size={ 500 }/> */}

//           </div>
// }
import Avatar from './Avatar.js';

function Card({ children }) {  /* 带有children prop的父组件 */
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      {/* 这个AvatarJSX作为子组件被传递给Card组件 */}
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

// export default App;
