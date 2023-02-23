import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export const FileView = () => {
    return (
        <>
            <Box height={"90%"} width={"94%"} border={2} borderRadius={2} sx={{ borderColor: "#d9d9d9", position: "relative", color: "#d9d9d9" }}>
                <Typography align="left" sx={{ margin: "1% 2%" }} variant="h5" ><InsertDriveFileIcon />test.txt</Typography>
                <Box sx={{ position: 'absolute', bottom: 16, right: 16 }}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Box>

            </Box>
        </>
    )
}