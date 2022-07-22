import Layout from "./common/components/layout";
import "./sass/main.scss";

function App() {
	return (
		<div className="App">
			<Layout format="sidebar-main">
				<div className="sidebar">sidebar</div>
				<div className="main-content">
					<div className="test-content">test-content</div>
				</div>
			</Layout>
		</div>
	);
}

export default App;
