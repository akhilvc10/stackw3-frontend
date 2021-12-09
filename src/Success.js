import {
	Alert,
	AlertTitle,
	Button,
	Container,
	Modal,
	Link
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

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

export default function Success() {
	const { user, repo } = useParams();
	const navigate = useNavigate();
	const [open, setOpen] = useState(true);

	return (
		<Modal
			keepMounted
			open={open}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			<Box sx={style}>
				<Alert severity="success">
					<AlertTitle>Success</AlertTitle>
					Successfully created the repo
				</Alert>
				<div
					style={{
						marginTop: 10,
						display: "flex",
						justifyContent: "flex-end"
					}}>
					<Button
						onClick={() => navigate("/")}
						color="error"
						variant="contained"
						size="small">
						Cancel
					</Button>
					<Button
						style={{
							marginLeft: 10
						}}
						variant="contained"
						href={`https://github.com/${user}/${repo}`}
						size="small">
						View Repo
					</Button>
				</div>
			</Box>
		</Modal>
	);
}
