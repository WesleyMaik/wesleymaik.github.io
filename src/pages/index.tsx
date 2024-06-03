//Modules
import styled from "styled-components";

//Components
import Header from "../components/template/header";

const Main = styled.main`
	margin: auto;

	> * {
		margin: 2em 0;

		> * {
			max-width: 800px;
			margin: auto;
		}
	}
`;

const App = () => {
	return (
		<Main>
			<Header />
		</Main>
	);
};

export default App;
