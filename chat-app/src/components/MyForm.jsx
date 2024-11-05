import React from 'react'

function MyForm() {
const[formData, setFormData] = React.useState({
    firstname : '',
})
// console.log(formData.firstname);

console.log(formData.firstname);
const handleChange = (e)=>{
    console.log(e.target.value);
    const {name, value, type} = e.target
    
    setFormData({
        ...formData, 
        [name]: e.target.value
    })
}

return (
        <div>
            <form >
                <input
                    type="text"
                    name='firstname'
                    value={formData.firstname}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default MyForm