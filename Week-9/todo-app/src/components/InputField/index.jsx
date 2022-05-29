import React, {useState} from "react"
const InputField = ({addTodo}) => {
    const [title, setTitle] = useState('')

    
    return(
        <section>
            
            <input value={title} onChange={(e) => {
                setTitle(e.target.value)
            }}  />
            <button onClick={() => {
                setTitle('');
                addTodo(title)
            }} >submit</button>
            
        </section>
    )
}
export default InputField