import React from 'react'
import style from './styles.module.scss'

export default function CatList() {

    /*
    const [catAge, setCatAge] = React.useState(0)
    const [catName, setCatName] = React.useState('sssssssss')
    */

    const [catData, setCatData] = React.useState({
        name: 'ssatang',
        age: 22,
    })

    

    const btn_addname = () => {
        //setCatName('ssprite')

        // setCatData({name:'Por'}) age 
        setCatData(prevState => {
            return {
                ...prevState,
                name: 'Por'
            }
        })
    }

    return (
        <div>
            <h1>H1</h1>
            <div className={style.box}>
                <p className={style.cat_name}>{catData.name}, {catData.age}</p>
            </div>
            <button onClick={btn_addname}>Set Name</button>
        </div>
    )
}
