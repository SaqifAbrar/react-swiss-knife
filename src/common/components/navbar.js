const navlinks = [
	{ lNo: 1, name: "Link 1", to: "link1" },
	{ lNo: 2, name: "Link 2", to: "link2" },
	{ lNo: 3, name: "Link 3", to: "link3" },
];

export default function NavBar() {
	return (
		<div className="navbar-container">
			<div className="logo-container">LOGO</div>
			<div className="navlinks-container">
				<ul className="navlinks">
					{navlinks.map((link) => (
						<li key={link.lNo} className="navlink">
							<a href={`/${link.to}`}>{link.name}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
