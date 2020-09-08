import React from 'react'

export default function NumbersBox({admin_name, version}) {

    const [numberBox, setNumbers] = React.useState([1,2,3,4,5])

    React.useEffect(() => {
        console.log('compponnt mounted version : ' + version)
        console.log('admin name ' + admin_name)
    }, [])

    React.useEffect(() => {
        console.log('number changed')
    }, [numberBox])

    return (
        <div>
            <h1>TTT</h1>
            {numberBox.join(',')}<br/>
            <button onClick={() => {
                console.log('Clicked!')
                
                //setNumbers([1,2])

                /// 1 Best for add value
                /*setNumbers(prevState => {
                    return [
                        ...prevState,
                        6
                    ]
                })*/

                /// 2 fro config data in arraay
                const temp_number = [...numberBox]
                temp_number.splice(2, 1)
                setNumbers(temp_number)

                // common used array utility 
                //      1. push         2. shift        3. pop      4. splice       5. join


            }}>Add Number</button>
        </div>
    )
}
