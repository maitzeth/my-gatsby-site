import React from 'react'
import { Fade } from 'react-reveal'
import { Table } from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component'
import css from './cv.module.scss';

const customStyles = {
	color: 'whitesmoke',
	textAlign: 'center'
}

const Skills = () => (
	<Fade>
		<div className={css.onlySmall}>
			<h1 className="mb-5" style={customStyles}>Skills</h1>
		</div>
		<Table dark>
			<thead>
				<tr>
					<th>Level</th>
					<th>Technologies</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<StarRatingComponent
							name="rate2"
							editing={false}
							starCount={5}
							value={5}
						/>
					</td>
					<td>HTML5</td>
				</tr>
				<tr>
					<td>
						<StarRatingComponent
							name="rate2"
							editing={false}
							starCount={5}
							value={5}
						/>
					</td>
					<td>CSS3</td>
				</tr>
				<tr>
					<td>
						<StarRatingComponent
							name="rate2"
							editing={false}
							starCount={5}
							value={4}
						/>
					</td>
					<td>Javascript</td>
				</tr>
				<tr>
					<td>
						<StarRatingComponent
							name="rate2"
							editing={false}
							starCount={5}
							value={3}
						/>
					</td>
					<td>NodeJS</td>
				</tr>
				<tr>
					<td>
						<StarRatingComponent
							name="rate2"
							editing={false}
							starCount={5}
							value={2}
						/>
					</td>
					<td>Ruby On Rails</td>
				</tr>
				<tr>
					<td>
						<StarRatingComponent
							name="rate2"
							editing={false}
							starCount={5}
							value={2}
						/>
					</td>
					<td>PHP</td>
				</tr>
			</tbody>
		</Table>
	</Fade>
)

export default Skills