import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { IMAGE_ICON_PATH, EXTENSION_PNG, mainColor, CheckBadNaming, handleErrorFile } from '../datas/Const'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? "transparent" : '#ffffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
})) //TODO: put this in a const and remove unnecessary things

function GridItemMultipleTooltip({item_names, width=48, id="testImage", alts=[]}) //TODO: id="testImage" remove ? //TODO: width=48 (default value in const)
{
    return(
        <Grid item xs={4} sm={4} md={1.5} style={{boxShadow: "0px !important"}}>
            <Item style={{boxShadow: "0px !important"}}> { /*TODO: boxShadow: "2px 2px 17px 3px " + mainColor to const*/  }
                {
                    item_names.map((name,index)=>
                    {
                        const srcName = CheckBadNaming(name).toLowerCase()
                        // TODO: <img> add alt to it (using alts)
                        return (<Tooltip key={""} title={name} arrow className="wobble-on-hover"><img src={ IMAGE_ICON_PATH + srcName + EXTENSION_PNG } width={width} style={{}} onError={(e)=>{handleErrorFile(e)}}/></Tooltip>)
                    })
                }
            </Item>
        </Grid>
    )
}
  
export default GridItemMultipleTooltip