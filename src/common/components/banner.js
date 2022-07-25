export default function banner({ background, children }) {
	return (
		<div className="banner">
			<div className="banner__background">{background}</div>
			<div className="banner__content">{children}</div>
		</div>
	);
}
