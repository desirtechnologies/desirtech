import { default as MuiBox } from "@mui/material/Box"


type BoxProps = {
    children: any
}

const Box = ({ children }: BoxProps) => {

    return (
        <MuiBox>
            {children}
        </MuiBox>
    )
}

export default Box
