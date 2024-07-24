let guest = 0;

function Cup() {
  // Bad：正在更改预先存在的变量！
  guest = guest + 1;
  console.log(`Tea cup for guest ${guest}`) 
}

function TeaSet() {
    Cup() 
    Cup() 
    Cup() 
}
TeaSet()