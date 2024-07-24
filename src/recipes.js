import { recipes } from './data.js';

function List({ id, name, ingredients }) {
  console.log(ingredients, name)
  return (
      <div >
        <h2>{name}</h2>
        <ul>
          {ingredients && ingredients.map(ingredient =>{
              return (
                <li >
                    {ingredient}
                </li>
              )
            }
          )}
        </ul>
      </div>
  )
}

export default function RecipeList() {
  return (
    <div>
      <h1>菜谱</h1>
      {recipes.map(recipe =>{
          return (
            <List {...recipe} />  //可以用展开运算符的方式传值
          )
        }
      )}
    </div>
  );
}
