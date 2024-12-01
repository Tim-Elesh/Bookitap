import { Sheet } from "@mui/joy"
import { Typography } from "@mui/joy";

const ComingSoon = () =>{
  return(
    <Sheet
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography level="h3">
        В разработке...
      </Typography>
    </Sheet>
  )
}

export default ComingSoon;