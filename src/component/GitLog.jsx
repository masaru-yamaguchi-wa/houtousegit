import Box from '@mui/material/Box';
import { useAtom } from 'jotai';
import { commandLogAtom, commandErrAtom } from '../Atoms';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export const GitLog = () => {
    const [commandLog] = useAtom(commandLogAtom)
    const [commandErr] = useAtom(commandErrAtom)
    return (
        <>
            <Box height={"90%"} width={"94%"} border={2} borderRadius={2} sx={{ borderColor: "#d9d9d9", color: "#d9d9d9" }}>
                {commandLog.length ? commandLog.map((e, i) => {
                    return (
                        <div key={i}>
                            <Stack direction="row" spacing={2}>
                                <Typography align="left" sx={{ margin: "0.5% 3%" }} variant="body1">{e}</Typography>
                                <Typography align="left" sx={{ margin: "0.5% 3%", color: "#e86c56" }} variant="body1">{commandErr[i]}</Typography>
                            </Stack>
                        </div>
                    )
                }) : <></>}
            </Box>
        </>
    )
}