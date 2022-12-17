import React from 'react'
import './JoinUs.css'

export const JoinUs = () => {
  return (
    <div class="main">
		<h1>Best protein store</h1>
		<div class="main-agileinfo">
			<div class="agileits-top">
				<form >
					<input class="text" type="text" name="Username" placeholder="Username" required=""/>
					<input class="text email" type="email" name="email" placeholder="Email" required=""/>
					<input class="text" type="password" name="password" placeholder="Password" required=""/>
					<input class="text w3lpass" type="password" name="password" placeholder="Confirm Password" required=""/>
					<div class="wthree-text">
						<label class="anim">
							<input type="checkbox" class="checkbox" required=""/>
							<span>I Agree To The Terms & Conditions</span>
						</label>
						<div class="clear"> </div>
					</div>
					<input type="submit" value="SIGNUP"/>
				</form>
				<h3>Creat youe account now</h3>
			</div>
		</div>
		
		
		
		<ul class="colorlib-bubbles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
  )
}
