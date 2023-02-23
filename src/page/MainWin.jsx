import Stack from '@mui/material/Stack';
import { RepoMove } from "../component/RepoMove"
import { GitLog } from "../component/GitLog";
import { FileView } from "../component/FileView";
import { GitCommand } from "../component/GitCommand"

export const MainWin = () => {
    return (
        <>
            <Stack direction="row" spacing={0} height={"100%"}>
                <Stack direction="column" spacing={0} height={"100%"} width={"60%"}>
                    <Stack direction="row" spacing={2} height={"20vh"} justifyContent="space-evenly" alignItems="center">
                        <RepoMove></RepoMove>
                    </Stack>
                    <Stack direction="row" height={"55vh"} justifyContent="center" alignItems="center">
                        <GitLog></GitLog>
                    </Stack>
                    <Stack direction="column" height={"25vh"} justifyContent="center" alignItems="center">
                        <p style={{ color: "#d9d9d9", textAlign: "left", margin: 0 }}>Work Tree Folder</p>
                        <FileView></FileView>
                    </Stack>
                </Stack>
                <Stack direction="column" spacing={0} height={"100%"} width={"60%"} justifyContent="center" alignItems="center">
                    <GitCommand></GitCommand>
                </Stack>
            </Stack>
        </>
    )
}