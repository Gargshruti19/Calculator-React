import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
	return (
		<div className="bg-slate-950">
			<h1 className="m-10 text-orange-500">Shruti</h1>
		</div>
	);
};

const AppLayout = () => {
	return <Header />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
