import React from 'react'
import Layout from '../components/Layout'
import css from '../assets/css/404.module.scss'
import CustomButton from '../components/CustomButton'

const NotFoundPage = () => (
	<Layout>
		<section className={css.errorWrapper}>
			<div className={css.errorMessages}>
				<h1 className="display-4">Sorry, this page doesn't exists.</h1>
				<div className="text-center my-3">
					<CustomButton text="Go back" link="/" color="black" />
				</div>
			</div>
		</section>
	</Layout>
)

export default NotFoundPage
