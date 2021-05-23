import React from "react";

import Card from "./Card";

export default (props) => {
	return (
		<Card title="Média dos Números" green>
			<div>
				<span>
					<span>Resultado: </span>
					<strong>{props.media}</strong>
				</span>
			</div>
		</Card>
	);
};
