import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useAtom } from 'jotai';
import { dataPositionAtom } from '../Atoms';

export const FileView = () => {
    const [dataPos, setDataPos] = useAtom(dataPositionAtom)
    const addFile = () => {
        return (setDataPos((prev) => {
            return [...prev, { id: dataPos.length + 1, name: `test${dataPos.length + 1}.txt`, position: 1 }]
        })
        )
    }
    return (
        <>
            <Box height={"90%"} width={"94%"} border={2} borderRadius={2} sx={{ borderColor: "#d9d9d9", position: "relative", color: "#d9d9d9" }}>
                {dataPos.length ? dataPos.map((e, i) => {
                    return (
                        <div key={i}>
                            <Typography align="left" sx={{ margin: "1% 2%" }} variant="h5" ><InsertDriveFileIcon />{e.name}</Typography>
                        </div>
                    )
                }) : <></>
                }
                <Box sx={{ position: 'absolute', bottom: 16, right: 16 }}>
                    <Fab color="primary" aria-label="add" onClick={addFile}>
                        <AddIcon />
                    </Fab>
                </Box>

            </Box>
        </>
    )
}