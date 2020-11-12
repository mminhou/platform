import React from "react";
import './SignIn.sass';
import Particles from "react-particles-js";
import {useHistory} from "react-router";

function Form ({ option }) {
	const history = useHistory();


	const loginSubmit = event => {
		event.preventDefault()
		console.log(event.target.email.value)
		console.log(event.target.password.value)
		alert("login")
		history.push('/home')
		window.location.reload()
	}

	const signinSubmit = event => {
		event.preventDefault()
		console.log(event.target.email.value)
		console.log(event.target.password.value)
		alert("signin")
	}

	return (
		<form className='account-form' onSubmit={
			option == 1 ? loginSubmit : (option == 2 ? signinSubmit : loginSubmit)
		}>
			<div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
				<input id='email' name='email' type='email' placeholder='E-mail' required />
				<input id='password' name='password' type='password' placeholder='Password'
					   required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
				<input id='repeat-password' name='repeat-password' type='password' placeholder='Repeat password'
					   required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} />
				<input id='name' name='name' type='name' placeholder='Name'
					   required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} />
				<input id='birth' name='birth' type='birth' placeholder='YYYYMMDD'
					   required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} />

			</div>

            { option === 1 ?
                <button className='btn-submit-form' type='submit' style={{marginTop: -5}}>Sign in</button>
                : (option === 2 ? <button className='btn-submit-form' type='submit' >Sign up</button>
                : <button className='btn-submit-form' type='submit' style={{marginTop: -3}}>Reset password</button>) }

			{/*<button className='btn-submit-form' type='submit' >*/}
			{/*	{ option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password') }*/}
			{/*</button>*/}
		</form>
	)
}

const SignIn = () => {
	const [option, setOption] = React.useState(1)

	return (
		<div className='container' >
			<header>
				<div className={'header-headings ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
					<span>Sign in to your account</span>
					<span>Create an account</span>
					<span>Reset your password</span>
				</div>
			</header>
			<ul className='options' style={{listStyle: 'none'}}>
				<li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>로그인</li>
				<li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>회원가입</li>
				<li className={option === 3 ? 'active' : ''} onClick={() => setOption(3)}>Forgot</li>
			</ul>
			<Form option={option} />
			<footer>
				<a href='' target='_blank'>Original design with animations by M_M</a>
			</footer>
		</div>
	)
}

export default SignIn;