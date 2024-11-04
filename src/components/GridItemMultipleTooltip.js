import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import _ from '../datas/Const'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? "transparent" : '#ffffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}))

function GridItemMultipleTooltip({item_names, width=48}) //TODO: width=48 (default value in const)
{
    return(
        <Grid item xs={4} sm={4} md={1.5} style={{boxShadow: "0px !important", '--Paper-shadow': '0 !important'}}>
            <Item style={{boxShadow: "0px !important", '--Paper-shadow': '0 !important'}}> { /*TODO: boxShadow: "2px 2px 17px 3px " + mainColor to const*/  }
                {
                    item_names.map((name,index)=>
                    {
                        const srcName = _.CheckBadNaming(name).toLowerCase()
                        // TODO: <img> add alt to it (using alts)
                        return (<Tooltip key={index} title={name} arrow className="wobble-on-hover"><img src={ _.IMAGE_ICON_PATH + srcName + _.EXTENSION_PNG } width={width} style={{}} onError={(e)=>{_.handleErrorFile(e)}}/></Tooltip>)
                    })
                }
            </Item>
        </Grid>
    )
}
  
export default GridItemMultipleTooltip