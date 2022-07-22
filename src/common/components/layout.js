/* import "../../sass/layout"; // where all layout styles are */

function Layout({ children, format }) {
	return <div className={`layout-container ${format}-format`}>{children}</div>;
}

export default Layout;
