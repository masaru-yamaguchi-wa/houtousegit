import Paper from '@mui/material/Paper';
import { useAtom } from 'jotai';
import { dataPosition } from '../Atoms';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Stack from '@mui/material/Stack';

export const RepoMove = () => {
    const [dataPos] = useAtom(dataPosition)
    return (
        <>
            <Paper variant="outlined" sx={{ bgcolor: "#202020", color: "#D9D9D9", border: 2, borderColor: "#D9D9D9", borderRadius: "5%", height: "80%", width: "calc(100%/5)" }}>
                <p key={"workTree title"} style={{ marginTop: 0 }}>Work Tree</p>
                {dataPos.length ? dataPos.map((dataPos, index) => {
                    if (dataPos.position >= 1) {
                        return (
                            <div key={index}>
                                <Stack direction="row" spacing={1} justifyContent="center">
                                    <InsertDriveFileIcon /><p >{dataPos.name}</p>
                                </Stack>
                            </div>
                        )
                    } else {
                        return <div key={index}></div>
                    }
                }) : <></>}
            </Paper>
            <Paper variant="outlined" sx={{ bgcolor: "#202020", color: "#D9D9D9", border: 2, borderColor: "#D9D9D9", borderRadius: "5%", height: "80%", width: "calc(100%/5)" }}>
                <p key={"Stage title"} style={{ marginTop: 0 }}>Stage/Index</p>
                {dataPos.length ? dataPos.map((dataPos, index) => {
                    if (dataPos.position >= 2) {
                        return (
                            <div key={index}>
                                <Stack direction="row" spacing={1} justifyContent="center">
                                    <InsertDriveFileIcon /><p >{dataPos.name}</p>
                                </Stack>
                            </div>
                        )
                    } else {
                        return <div key={index}></div>
                    }
                }) : <></>}
            </Paper>
            <Paper variant="outlined" sx={{ bgcolor: "#202020", color: "#D9D9D9", border: 2, borderColor: "#D9D9D9", borderRadius: "5%", height: "80%", width: "calc(100%/5)" }}>
                <p key={"Local title"} style={{ marginTop: 0 }}>Local Repo</p>
                {dataPos.length ? dataPos.map((dataPos, index) => {
                    if (dataPos.position >= 3) {
                        return (
                            <div key={index}>
                                <Stack direction="row" spacing={1} justifyContent="center">
                                    <InsertDriveFileIcon /><p >{dataPos.name}</p>
                                </Stack>
                            </div>
                        )
                    } else {
                        return <div key={index}></div>
                    }
                }) : <></>}
            </Paper>
            <Paper variant="outlined" sx={{ bgcolor: "#202020", color: "#D9D9D9", border: 2, borderColor: "#D9D9D9", borderRadius: "5%", height: "80%", width: "calc(100%/5)" }}>
                <p key={"Remote title"} style={{ marginTop: 0 }}>Remote Repo</p>
                {dataPos.length ? dataPos.map((dataPos, index) => {
                    if (dataPos.position === 4) {
                        return (
                            <div key={index}>
                                <Stack direction="row" spacing={1} justifyContent="center">
                                    <InsertDriveFileIcon /><p >{dataPos.name}</p>
                                </Stack>
                            </div>
                        )
                    } else {
                        return <div key={index}></div>
                    }
                }) : <></>}
            </Paper>
        </>
    )
}