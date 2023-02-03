import propic from '../assets/profile.jpg';

export default function Info() {
	return (
		<div className="info-section">
			<img src={propic} alt="Profile picture" className="propic" />
			<h1>Mohamed Mejri</h1>
			<p>Full-Stack Developer</p>
			<a href="https://github.com/mejrimo">
				<p>Github profile</p>
			</a>
			<div className="button-container">
				<button className="email-button">Email</button>
				<button
					className="linkedin-button"
					onclick="window.location.href='www.linkedin.com/in/mohamed-mejri-925157234';">
					LinkedIn
				</button>
			</div>
		</div>
	);
}
