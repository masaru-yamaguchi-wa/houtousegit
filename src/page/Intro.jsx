import { ReactComponent as GitIcon } from "../asset/icons8-git-50.svg"
// import GitIcon from "../asset/icons8-git-500.png"
import { Link, useNavigate } from "react-router-dom"
import Box from '@mui/material/Box';
import Typewriter from 'typewriter-effect';

export const Intro = () => {
    new Typewriter('#typewriter', {
        strings: ['Hello', 'World'],
        autoStart: true,
    });
    const navigate = useNavigate()
    return (
        <>
            <Box height={"100%"} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", color: "#D9D9D9", fontSize: "2em" }}>
                <Box width={"50%"}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Do you know how to use Git?')
                                .pauseFor(1000)
                                .deleteChars(8)
                                .pauseFor(500)
                            typewriter.typeString('find out?')
                                .pauseFor(1000)
                                .deleteAll()
                            typewriter.typeString("Let's get started!!!!!")
                                .pauseFor(1500)
                                .callFunction(() => {
                                    navigate("/main");
                                })
                                .start();
                        }}
                    />
                </Box>
                <Box width={"50%"}>
                    <GitIcon height={"500px"} width={"500px"}></GitIcon>
                </Box>
            </Box>
            <Link to="/main">go to main</Link>
            <a target="blank" href="https://icons8.com/icon/38389/git">Git</a> icon by <a target="blank" href="https://icons8.com">Icons8</a>
        </>
    )
}