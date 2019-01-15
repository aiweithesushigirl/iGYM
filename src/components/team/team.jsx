import React, { Component } from 'react';
import './team.css';

class TeamComponent extends Component {
	render() {
		return (
			<div className="team">
				<h1 className="h1">Team</h1>

				<div className="team-photo">
					<img
						src={require('/Users/wuaiwei/Desktop/personal-portfolio/src/components/team/Team.jpg')}
						alt="1"
					/>
					<p className="text-center">
						We are an interdisciplinary team of designers, engineers, and human-computer interaction
						researchers at the University of Michigan.
					</p>
				</div>

				<div className="teams">
					<div className="faculty">
						<ul style={{ listStyleType: 'none' }}>
							<li>
								Principal Researcher{' '}
								<a href="https://stamps.umich.edu/people/detail/roland_graf">
									<b>Roland Graf</b>
								</a>
							</li>
							<li>
								{' '}
								Stamps School of Art and Design{' '}
								<a href="https://stamps.umich.edu/people/detail/sun_young_park">
									<b>Sun Young Park</b>
								</a>
							</li>
							<li>
								{' '}
								Stamps School and School of Information{' '}
								<a href=" https://kim.engin.umich.edu/">
									<b>Hun Seok Kim</b>
								</a>
							</li>
						</ul>
					</div>
					<div className="student">
						<ul style={{ listStyleType: 'none' }}>
							<li>
								<b>Current Students</b>
							</li>
							<li>Emma Shpiz</li>
							<li>Zixuan Li</li>
							<li>Dashiell Carichner</li>
						</ul>
						<ul style={{ listStyleType: 'none' }}>
							<li>
								<b>Former Students</b>
							</li>
							<li>Megan Freund</li>
							<li>Priyanka Raju</li>
							<li>Yaqian Zhao</li>
							<li>Luyao Gong</li>
						</ul>
					</div>
					<div className="consultant">
						<ul style={{ listStyleType: 'none' }}>
							<li>
								<b>Consultants</b>
							</li>
							<li>Seth Andrew Warschausky, Ph.D.</li>
							<li>Betsy Howell, M.S., P.T.</li>
							<li>Robert C. Ferguson, MHS, OTRL</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default TeamComponent;
