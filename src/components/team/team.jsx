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
							<h3>
								<a href="https://stamps.umich.edu/people/detail/roland_graf">
									<b>Roland Graf</b>
								</a>
								<br />
							</h3>
							Stamps School of Art and Design{' '}
					
							<br />
							<h3>
								
								<a href=" https://kim.engin.umich.edu/">
									<b>Hun Seok Kim</b>
								</a>
								<br /> 
							</h3>
							College of Enginerring{' '}

							<br />
							<h3>
								<a href="https://www.si.umich.edu/people/michael-nebeling">
									<b>Michael Nebeling</b>
								</a>
								<br /> 
							</h3>
							School of Information{' '}
					
							<br />
							<h3>
							<a href="https://stamps.umich.edu/people/detail/sun_young_park">
									<b>Sun Young Park</b>
								</a>
								
								<br /> 
							</h3>
							Stamps School and School of Information{' '}
						</ul>
					</div>
					<div className="student">
						<ul style={{ listStyleType: 'none' }}>
							<h3>
								<b>Research Assistants</b>
							</h3>
							<br />
							<li>Zixuan Li</li>
							<li>Pallavi Benawri</li>
							<li>Amy E. Whitesall</li>
							<li>Dashiell Carichner</li>
							<li>Emma Shpiz</li>
		
						</ul>
						<br />
						<ul style={{ listStyleType: 'none' }}>
							<h3>
								<b>Alumni</b>
							</h3>
							<br />
							<li>Megan Freund</li>
							<li>Priyanka Raju</li>
							<li>Yaqian Zhao</li>
							<li>Luyao Gong</li>
						</ul>
					</div>
					<div className="consultant">
						<ul style={{ listStyleType: 'none' }}>
							<h3>
								<b>Consultants</b>
							</h3>
							<br />
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
