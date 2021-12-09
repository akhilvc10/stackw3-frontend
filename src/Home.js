import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SelectionCard from "./SelectionCard";
import {
	AppBar,
	Button,
	Container,
	IconButton,
	Paper,
	TextField,
	Toolbar
} from "@mui/material";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const GITHUB_CLIENT_ID = "49f7bcf2ad6a3564004a";
const path = "/";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4
};

function Home() {
	const [user, setUser] = useState();
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [jsLibrary, setJsLibrary] = useState("react");
	const [cssLibrary, setCssLibrary] = useState("material-ui");
	const [templateName, setTemplateName] = useState("");

	// const gitHubRedirectURL = `http://localhost:4000/api/auth/github?data=${jsLibrary},${cssLibrary},${templateName}`;
	const handleJsLibrary = (event) => {
		setJsLibrary(event.target.value);
	};

	const handleCssLibrary = (event) => {
		setCssLibrary(event.target.value);
	};

	useEffect(() => {
		(async function () {
			const usr = await axios
				.get(`http://localhost:4000/api/me`, {
					withCredentials: true
				})
				.then((res) => res.data);

			setUser(usr);
		})();
	}, []);

	const onClickGithub = () => {
		const gitHubRedirectURL = `https://qy8ve8bwcf.execute-api.ap-south-1.amazonaws.com/prod/github?data=${jsLibrary},${cssLibrary},${templateName},repo`;
		window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}&scope=repo`;
	};

	const onClickDownload = () => {
		const gitHubRedirectURL = `https://qy8ve8bwcf.execute-api.ap-south-1.amazonaws.com/prod/github?data=${jsLibrary},${cssLibrary},${templateName},download`;
		window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}&scope=repo`;
	};

	return (
		<Container
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center"
			}}
			maxWidth="sm">
			<AppBar position="static">
				<Toolbar variant="dense">
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}>
						StackW3
					</IconButton>
					<Typography variant="h7" color="inherit" component="div">
						v0.1
					</Typography>
				</Toolbar>
			</AppBar>

			<SelectionCard
				title="JS Library"
				data={["react", "vite"]}
				value={jsLibrary}
				handleChange={handleJsLibrary}
			/>
			<SelectionCard
				title="Css Library"
				data={
					jsLibrary === "react"
						? ["material-ui", "tailwind"]
						: ["vanilla-extract"]
				}
				value={cssLibrary}
				handleChange={handleCssLibrary}
			/>
			<Paper
				style={{
					padding: 10,
					display: "flex",
					justifyContent: "center"
				}}
				variant="outlined">
				<Button
					onClick={onClickDownload}
					style={{
						marginRight: 10
					}}
					variant="contained">
					Download
				</Button>

				<Button onClick={handleOpen} variant="contained">
					Add to your github repo
				</Button>
			</Paper>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={style}>
					<TextField
						style={{
							width: "100%"
						}}
						value={templateName}
						onChange={(e) => setTemplateName(e.target.value)}
						id="outlined-basic"
						label="Enter the template name"
						variant="outlined"
					/>
					<Button
						onClick={onClickGithub}
						style={{
							marginTop: "20px"
						}}
						variant="contained">
						Create Template
					</Button>
				</Box>
			</Modal>
		</Container>
	);
}

export default Home;
