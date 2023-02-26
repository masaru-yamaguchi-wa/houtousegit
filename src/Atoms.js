import { atom } from "jotai"

export const dataPositionAtom = atom([
    {
        "id": "1",
        "name": "test.txt",
        "position": 1
    }
])

export const commandLogAtom = atom([">"])
export const commandErrAtom = atom([""])