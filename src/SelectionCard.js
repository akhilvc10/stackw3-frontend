import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Paper } from "@mui/material";

export default function SelectionCard(props) {
	const { data, title, handleChange, value } = props;
	return (
		<Paper
			style={{
				padding: 10,
				marginBottom: 10
			}}
			variant="outlined">
			<FormControl component="fieldset">
				<FormLabel component="legend">{title}</FormLabel>
				<RadioGroup
					row
					aria-label="js"
					name="controlled-radio-buttons-group"
					value={value}
					onChange={handleChange}>
					{data.map((val) => {
						return (
							<FormControlLabel value={val} control={<Radio />} label={val} />
						);
					})}
				</RadioGroup>
			</FormControl>
		</Paper>
	);
}
