import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { command } from "../commandData"

export const GitCommand = () => {
    return (
        <>
            <Box height={"97%"} width={"94%"} border={2} borderRadius={2} sx={{ borderColor: "#d9d9d9", color: "#d9d9d9", overflow: "auto" }}>
                {command.map((e, i) => {
                    return (
                        <Box key={i} width={"97%"} border={2} borderRadius={2} sx={{ borderColor: "#d9d9d9", color: "#d9d9d9", margin: "3% auto" }}>
                            <Typography align="left" sx={{ margin: "1% 2%" }} variant="h5" >{e.command}</Typography>
                            <hr style={{ marginTop: 0 }} />
                            <Typography align="left" sx={{ margin: "1% 2%" }} variant="body1">{e.detail}</Typography>
                            <Typography align="left" sx={{ margin: "1% 2%" }} variant="body2">{e.detail2}</Typography>
                        </Box>
                    )

                })}
            </Box>
        </>
    )
}