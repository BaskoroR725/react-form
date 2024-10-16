import {useState} from 'react';

function BetterSignupForm(){
    const [formData, setFormData] = useState({
        firstName:'', 
        lastName:'',
        password:''});

    const handleChange = (evt) =>{
        const changeField = evt.target.name;
        const newValue = evt.target.value;
        setFormData((currData) =>{
            currData[changeField] = newValue;
            return {...currData};
        })
    }

    const handleSubmit = () => {
        console.log(formData);
    }
    return (
        <div>
            <label htmlFor="firstname">First Name : </label>
            <input type="text" placeholder='firstname' 
            value={formData.firstName} 
            onChange={handleChange} 
            id='firstname'
            name='firstName'
            />
            
            <label htmlFor="lastname">Last Name : </label>
            <input type="text" placeholder='lastname' 
            value={formData.lastName} 
            onChange={handleChange} 
            id='lastname'
            name='lastName'
            />

            <label htmlFor="password">Password : </label>
            <input type="password" placeholder='password' 
            value={formData.password} 
            onChange={handleChange} 
            id='password'
            name='password'
            />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default BetterSignupForm;