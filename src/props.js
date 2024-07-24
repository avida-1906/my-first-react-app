// import { getImageUrl } from './utils.js';

import ChildSecond from "./ChildSecond.js";


// function Profile( { name, urlData, altData, profession, awards, discovered } ) {
//     return (
//         <section className="profile">
//             <h2>{ name }</h2>
//             <img
//             className="avatar"
//             src={ getImageUrl( urlData ) }
//             alt={ altData }
//             width={70}
//             height={70}
//             />
//             <ul>
//             <li>
//                 <b>Profession: </b> 
//                 { profession }
//             </li>
//             <li>
//                 <b>Awards: 4 </b> 
//                 { awards }
//             </li>
//             <li>
//                 <b>Discovered: </b>
//                 { discovered }
//             </li>
//             </ul>
//         </section>
//     )
// }


// export default function Gallery() {
//   return (
//     <>
//         <Profile name={'Maria Skłodowska-Curie'} urlData={'szV5sdG'} altData={"Maria Skłodowska-Curie"} profession={'geochemist'} awards={'4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'} discovered={'polonium (chemical element)'} />
//         <Profile name={'Katsuko Saruhashi'} urlData={'YfeOqp2'} altData={"Katsuko Saruhashi"} profession={'physicist and chemist'} awards={'2 (Miyake Prize for geochemistry, Tanaka Prize)'} discovered={'a method for measuring carbon dioxide in seawater'} />
//     </>
//   );
// }

// import { getImageUrl } from "./utils"

// function Avatar( { person, size } ) {
//     return (
//         <>
//             <img src={ getImageUrl(person, 'b') } alt={person.name} width={size} height={size} />
//         </>
//     )
// }

// function Profile() {
//     return (
//         <Avatar person={ { name:'张三', imageId:'7vQD0fP' } } size={ 20 } />
//     )
// }

// export default Profile;


function Card( { childrend, title } ) {
    return (
        <div className="card">
            <div className="card-content">
                <h1>{title}</h1>
                { childrend }
            </div>
        </div>
    )
}

export default function Profile() {
    return (
        <div>
            <Card title='photo'>
                <h1>Photo</h1>
                {/* <img
                    className="avatar"
                    src="https://imgur.com/7vQD0fP"
                    alt="Aklilu Lemma"
                    width={70}
                    height={70}
                /> */}
            </Card>
            <Card>
                <h1>About</h1>
                <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
            </Card>
        </div>
    );
  }
  