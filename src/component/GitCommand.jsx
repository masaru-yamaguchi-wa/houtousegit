import { useState } from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { command } from "../commandData"
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useAtom } from "jotai"
import { commandLogAtom, dataPositionAtom, commandErrAtom } from "../Atoms"

export const GitCommand = () => {
    const [open, setOpen] = useState(false);
    const [commandIndex, setCommandIndex] = useState(0);

    const [, setCommandLog] = useAtom(commandLogAtom)
    const [dataPos, setDataPos] = useAtom(dataPositionAtom)
    const [, setCommandErr] = useAtom(commandErrAtom)

    const handleOpen = (e) => {
        setCommandIndex(e.currentTarget.id)
        setOpen(true)
    };
    const handleClose = (e) => {
        setOpen(false)

    };
    const commandButtonEve = () => {
        setCommandLog((prev) => [...prev, `> ${command[commandIndex].command} ${command[commandIndex].target}`])
        command[commandIndex].func(setDataPos, dataPos, setCommandErr)
        handleClose()
    }
    return (
        <>
            <Box height={"97%"} width={"94%"} border={2} borderRadius={2} sx={{ borderColor: "#d9d9d9", color: "#d9d9d9", overflow: "auto" }}>
                {/* <Button onClick={() => { console.log(commandLog, dataPos) }} >get command log</Button> */}
                {command.map((e, i) => {
                    return (
                        <div key={i} >
                            <Box id={i} width={"97%"} border={2} borderRadius={2} onClick={handleOpen} sx={{ borderColor: "#d9d9d9", color: "#d9d9d9", margin: "3% auto" }}>
                                <Typography align="left" sx={{ margin: "1% 2%" }} variant="h5" >{e.command}</Typography>
                                <hr style={{ marginTop: 0 }} />
                                <Typography align="left" sx={{ margin: "1% 2%" }} variant="body1">{e.detail}</Typography>
                                <Typography align="left" sx={{ margin: "1% 2%" }} variant="body2">{e.detail2}</Typography>
                                <Typography align="left" sx={{ margin: "1% 2%" }} variant="body2">{e.target}</Typography>
                            </Box>
                            <Modal
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                open={open}
                                onClose={handleClose}
                                slotProps={{
                                    backdrop: {
                                        invisible: false,
                                        sx: { backgroundColor: "#00000020" }
                                    },
                                }}
                            >
                                <Box sx={{
                                    position: 'absolute', top: '50%', left: '50%', backgroundColor: "background.paper", transform: 'translate(-50%, -50%)', boxShadow: 24, p: 4, borderRadius: "10px"
                                }}
                                >
                                    <h2 id="child-modal-title">対象ファイル/リポジトリ/ブランチの選択</h2>
                                    <p id="child-modal-description">
                                        コマンドオプションを選択してください
                                    </p>
                                    <Button variant="outlined" sx={{ textTransform: "none" }} onClick={commandButtonEve} >{command[commandIndex].target === "" ? "Just do it's" : `target:${command[commandIndex].target}`} </Button>
                                </Box>
                            </Modal>
                        </div>
                    )

                })}
            </Box>
        </>
    )
}