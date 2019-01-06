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
				</div>
				<p className="text-center">
					We are an interdisciplinary team of designers, engineers, and human-computer interaction researchers
					at the University of Michigan.
				</p>
				<div className="teams">
					<div className="faculty">
						<ul style={{ listStyleType: 'none' }}>
							<li>Faculty</li>
							<li>Principal Researcher Roland Graf</li>
							<li> Stamps School of Art and Design Sun Young Park</li>
							<li> Stamps School and School of Information Hun Seok Kim</li>
						</ul>
					</div>
					<div className="student">
						<ul style={{ listStyleType: 'none' }}>
							<li>Current Students</li>
							<li>Emma Shpiz</li>
							<li>Zixuan Li</li>
							<li>Dashiell Carichner</li>
						</ul>
						<ul style={{ listStyleType: 'none' }}>
							<li>Former Students</li>
							<li>Megan Freund</li>
							<li>Priyanka Raju</li>
							<li>Yaqian Zhao</li>
							<li>Luyao Gong</li>
						</ul>
					</div>
					<div className="consultant">
						<ul style={{ listStyleType: 'none' }}>
							<li>Consultants</li>
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
