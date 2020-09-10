import React from 'react'
import style from './styles.module.scss'

export default function CatList() {

    /*
    const [catAge, setCatAge] = React.useState(0)
    const [catName, setCatName] = React.useState('sssssssss')
    */

    const input_catname = React.createRef();

    const [catData, setCatData] = React.useState({
        name: 'ssatang',
        age: 22,
    })
    
    const btn_addname = () => {
        //setCatName('ssprite')
        
        //console.log(input_catname.current.value)
        if(input_catname.current.value===''){
            console.log('input again')
        }
        // setCatData({name:'Por'}) age 
        else setCatData(prevState => {
            return {
                ...prevState,
                name: input_catname.current.value
            }
        })
    }

    return (
        <div>
            <h1>H1</h1>
            <div className={style.box}>
                <p className={style.cat_name}>{catData.name}, {catData.age}</p>
            </div>
            <input ref={input_catname} />
            <button onClick={btn_addname}>Set Name</button>
        </div>
    )
}