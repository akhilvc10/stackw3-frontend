import { Alert, AlertTitle, Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "white",
	boxShadow: 24,
	p: 4,
	":focus-visible": {
		outline: "none"
	}
};

const downloadFromAnchor = (resource_link) => {
	const link = document.createElement("a");
	link.href = resource_link;

	// Append to html link element page
	document.body.appendChild(link);

	// Start download
	link.click();

	// Clean up and remove the link
	link.parentNode.removeChild(link);
};

export default function Download() {
	const [open, setOpen] = useState(true);
	const { user, template } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const url = `https://github.com/${user}/${template}/archive/refs/heads/main.zip`;
		downloadFromAnchor(url);
	}, []);

	return (
		<Modal
			keepMounted
			open={open}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			<Box sx={style}>
				<Alert severity="success">
					<AlertTitle>Downloading zip</AlertTitle>
					Your template is getting downloaded --
				</Alert>

				<div
					style={{
						marginTop: 10,
						display: "flex",
						justifyContent: "flex-end"
					}}>
					<Button
						onClick={() => navigate("/")}
						variant="contained"
						size="small">
						Go Home
					</Button>
				</div>
			</Box>
		</Modal>
	);
}
