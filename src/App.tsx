import { CoreAdmin, Resource } from "ra-core";
import { dataProvider } from "./dataProvider";
import authProvider from "./authProvider";
import { i18nProvider } from "./i18nProvider";
import { Layout } from "./layout/Layout";
import { LoginPage } from "./layout/LoginPage";
import { products } from "./products";
import { categories } from "./categories";
import { Dashboard } from "./Dashboard";

function App() {
	return (
		<CoreAdmin
			dataProvider={dataProvider}
			authProvider={authProvider}
			i18nProvider={i18nProvider}
			layout={Layout}
			loginPage={LoginPage}
			dashboard={Dashboard}
		>
			<Resource {...products} />
			<Resource {...categories} />
		</CoreAdmin>
	);
}

export default App;
