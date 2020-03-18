import axios from 'axios'


export const register = newUser => {
    return axios
    .post('users/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
        
    })
    .then(() => {
        console.log('Registered')
    })

}

export const login = user => {
    return axios
    .post('users/login',{
        email: user.email,
        password: user.password

    })
    .then(res => {
       // if(res.data)
        localStorage.setItem('usertoken', res.data)
        console.log(res.data)
        return res.data

    })
    .catch(err => {
        console.log('Invalid username and password', + err)
        //this.props.history.push(`/register`)
    })

}

