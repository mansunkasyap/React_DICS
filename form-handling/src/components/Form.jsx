import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        userName: '',
        passWord: '',
        isChecked: false,
        gender: '',
        comment: '',
        rangeVal: 10,
        employement: '',
        color:'#cccccc',
        file : null,

    })
    console.log(formData);
    function handleOnChange(e) {
        const { type, name, value, checked } = e.target
        setFormData((prevFormData) => (
            {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        ))
    }
    return (
        <div className='h-screen w-auto bg-teal-800'>
            <form>
                <div>
                    <label htmlFor="username">Username : </label>
                    <input
                        type="text"
                        id='username'
                        name='userName'
                        value={formData.userName}
                        placeholder='Enter your name'
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="text"
                        id='password'
                        name='passWord'
                        value={formData.passWord}
                        placeholder='Enter password'
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <input
                        type='checkbox'
                        checked={formData.isChecked}
                        onChange={handleOnChange}
                        name='isChecked'
                    />
                    check/uncheck
                </div>


                <div>
                    <input
                        type="radio"
                        name="gender"
                        id="maleid"
                        value='male'
                        checked={formData.gender === 'male'}
                        onChange={handleOnChange}
                    />
                    <label htmlFor="maleid">M</label>
                    <input
                        type="radio"
                        name="gender"
                        id="female_id"
                        value='female'
                        checked={formData.gender === 'male'}
                        onChange={handleOnChange}
                    />
                    <label htmlFor="female_id">F</label>
                    <input
                        type="radio"
                        name="gender"
                        id="othersid"
                        value='others'
                        onChange={handleOnChange}
                    />
                    <label htmlFor="othersid">O</label>
                </div>
                <textarea
                    name="comment"
                    id="comment-txt"
                    onChange={handleOnChange}
                    value={formData.comment}
                ></textarea>

                <div>
                    <input
                        type="range"
                        min='0'
                        max='100'
                        name='rangeVal'
                        value={formData.value}
                        onChange={handleOnChange}
                    />{formData.rangeVal}
                </div>
                <label htmlFor=""></label>
                <select
                    name="employement"
                    id="employment"
                    value={formData.employement}
                    onChange={handleOnChange}
                >
                    <option value="--Select your--">--Select your--</option>
                    <option value="Employed" >Employed</option>
                    <option value="Unemployed">Unemoloyed</option>
                    <option value="Nalla">Nalla</option>
                    <option value="Berojgaar">Berojgaar</option>
                </select>

                <input
                    type="file"
                    name="resume"
                    // value={}
                    id=""
                />


                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form