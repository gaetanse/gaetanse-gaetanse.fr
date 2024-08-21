import React, { useState, Fragment } from "react"
import Element from './components/Element'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import MailIcon from '@mui/icons-material/Mail'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DownloadIcon from '@mui/icons-material/Download'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
import CloudOffIcon from '@mui/icons-material/CloudOff'
import GridItemMultipleTooltip from './components/GridItemMultipleTooltip'
import GitHubIcon from '@mui/icons-material/GitHub'
import PhoneIcon from '@mui/icons-material/Phone'
import PlaceIcon from '@mui/icons-material/Place'
import FilledInput from '@mui/material/FilledInput'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import OutlinedInput from '@mui/material/OutlinedInput'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Divider from '@mui/material/Divider'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import { red } from '@mui/material/colors';
import { Tooltip } from '@mui/material'

import { importData } from "./datas/ProjetsData"
import { IMAGE_ICON_PATH, EXTENSION_PNG, mainColor, CheckBadNaming, TAG_REACT, TAG_JAVASCRIPT, TAG_TYPESCRIPT, TAG_CSHARP, TAG_DOTNET, TAG_PHP, TAG_SYMFONY, TAG_JAVA, TAG_CPLUSPLUS, TAG_UNREAL_ENGINE_5, TAG_OPENGL, TAG_STEAM, TAG_SFML, TAG_BOX2D, TAG_HTML, TAG_CSS, TAG_MYSQL, TAG_BOOTSTRAP, TAG_ANTD, TAG_SEMANTIC, TAG_ANDROID, TAG_POEDIT, TAG_JSON } from './datas/Const'

import './App.css'
import 'react-vertical-timeline-component/style.min.css'

//TODO: remove unnecessary imports / remove all ';'

const pages = ['À propos', 'Projets', 'Scroll en bas ↓']
const links = ['#top', '#projects', '#bottom']
const drawerWidth = 240
//TODO: put all in const file

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? "transparent" : '#ffffff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//TODO: put all in const file
//TODO: remove all unnecessary things

function App() {

  const theme = useTheme()
  const [data, setData] = useState(importData)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const expand = (index) => 
  {
    const copyData = [...data]
    for (let i = 0; i < copyData.length; i++) if(i!==index) copyData[i].expanded = false
    copyData[index].expanded = !copyData[index].expanded
    setData(copyData)
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#DBE2EF',
      },
    },
    typography: {
      fontFamily: [
        'Times New Roman',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontSize: 16,
    },
  });
  
  darkTheme.typography.h3 = {
    fontSize: '1.3rem',
    '@media (min-width:600px)': {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
    marginRight: "0px !important"
  };
  
  darkTheme.typography.h5 = {
    fontSize: '1.8rem',
    '@media (min-width:600px)': {
      fontSize: '2.0rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.6rem',
    },
  };
  
  darkTheme.typography.h6 = {
    fontSize: '0.6rem',
    '@media (min-width:600px)': {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3rem',
    },
  };
  
  darkTheme.typography.h2 = {
    fontSize: '1.7rem',
    '@media (min-width:600px)': {
      fontSize: '1.9rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.1rem',
    },
  }
  
  const [index, setIndex] = useState(0);
  
  //TODO: put all in const file
  //TODO: remove all unnecessary things
    
  return (

    <div className="App" id="top">

        <header className="App-header">
        <ThemeProvider theme={darkTheme}>

        <div class="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <AppBar position="sticky" style={{backgroundColor:mainColor}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            <div style={{color: "white"}}>
            Gaëtan.S
            </div>
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon
                style={{color: "white"}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href={links[index]}
                >
                <div id="testText">
                      {page}
                      </div>
                </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* TODO: all img alt */}
            <img src="/files/favicon.ico" width={32} height={32} style={{marginRight: "16px"}} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} ></img>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            <div style={{color: "white"}}>
            Gaëtan.S
              </div>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href={links[index]}
                >
            <div id="testText">
                  {page}
                  </div>
                </Button>
              ))}
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
                <Button
                  key={"Contact"}
                  onClick={()=>{setOpen(true)}}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href="#contact"
                >
                  <div id="testText">
                    {"Contact"}
                  </div>
                </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="section" style={{marginTop: "5vh"}} sx={{ p: 2 }}>
        
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={4} sm={4} md={12}>
                <Item style={{boxShadow: "2px 2px 17px 3px " + mainColor}}>
  
                <div id="testText" style={{backgroundColor:mainColor, maxWidth: "600px", borderRadius: "25px", padding: "10px", margin: "auto", marginTop:"8px"}}>
                  <Typography
              variant="h2"
              noWrap={true}
              sx={{
                mr: 2,
                fontFamily: "Times New Roman",
                fontWeight: 700,
                color: 'white',
              }}
            >
              Gaëtan Sadous <br/>
              </Typography><Typography
              variant="h3"
              noWrap
              sx={{
                mr: 2,
                fontWeight: 700,
                color: 'white',
              }}
            >
              Développeur Fullstack <br/>
              </Typography>
              
              <Typography
              variant="h6"
              noWrap={true}
              sx={{
                mr: 2,
                fontWeight: 700,
                color: 'white',
              }}
            >
              <FormatQuoteIcon className="syncopate-bold" style={{width: "16px"}}/>
              Transforme les idées en projets concrets et agréables.
              <FormatQuoteIcon style={{width: "16px"}}/>
  
            </Typography>
              {/* TODO: all img alt */}
              <img src="/images/photo_identite.png" width={"19%"} style={{border:"0px solid", borderRadius: "100px"}}></img>

            </div>
            
            <Typography
              noWrap
              href="#app-bar-with-responsive-menu"
              variant="h3"
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
          <div id="testText" style={{backgroundColor:mainColor, maxWidth: "600px", borderRadius: "25px", padding: "10px", margin: "auto", marginTop: "25px"}}>
          Technologies courantes :
          </div>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginTop: "10px", marginBottom: "20px"}} justifyContent="center">
              <GridItemMultipleTooltip item_names={[TAG_REACT, TAG_JAVASCRIPT, TAG_TYPESCRIPT]}/>
              <GridItemMultipleTooltip item_names={[TAG_CSHARP, TAG_DOTNET]}/>
              <GridItemMultipleTooltip item_names={[TAG_PHP, TAG_SYMFONY]}/>
              <GridItemMultipleTooltip item_names={[TAG_JAVA]}/>
            </Grid>
          <div id="testText" style={{backgroundColor:mainColor, maxWidth: "600px", borderRadius: "25px", padding: "10px", margin: "auto", marginTop: "25px"}}>
            Autres technologies :
          </div>
            
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginTop: "10px", marginBottom: "16px"}} justifyContent="center">
            <GridItemMultipleTooltip item_names={[TAG_CPLUSPLUS, TAG_UNREAL_ENGINE_5, TAG_OPENGL]}/>
            <GridItemMultipleTooltip item_names={[TAG_STEAM, TAG_SFML, TAG_BOX2D]}/>
            <GridItemMultipleTooltip item_names={[TAG_HTML, TAG_CSS, TAG_MYSQL]}/>
            <GridItemMultipleTooltip item_names={[TAG_BOOTSTRAP, TAG_ANTD, TAG_SEMANTIC]}/>
            <GridItemMultipleTooltip item_names={[TAG_ANDROID, TAG_POEDIT, TAG_JSON]}/>
          </Grid>
          </Typography>
  
                </Item>
              </Grid>
          </Grid>
  
      </Box>
              
      <Box component="section" style={{marginTop: "20px"}} sx={{ p: 2 }} id="projects">

        
{data !== undefined && 

<VerticalTimeline>

  {data.length > 0 && data.map((element,i)=>{
    return(
      <Fragment key = {i}>

        <VerticalTimelineElement
          id = {
            "link" + i
          }
          className="vertical-timeline-element--work somespace test"
          contentStyle={{ background: mainColor, color: '#fff', padding: "6px"}}
          contentArrowStyle={{ borderRight: "24px solid "+ mainColor}}
          date= 
            {
                <div style={{backgroundColor: mainColor, width: "50px", marginLeft: i % 2 === 1 && "auto", marginRight: i % 2 === 0 && "auto", textAlign: "center", borderRadius: "10px", padding: "5px"}}>
                  {
                    element.custom_link !== "" ? <a href={element.custom_link} target="_blank" rel="noreferrer" style={{color:"white"}}><Tooltip title="Lien disponible !" placement={i % 2 === 0 ? "right" : "left"}><CloudQueueIcon/></Tooltip> </a> : <> <Tooltip title="Lien pas disponible !" placement={i % 2 === 0 ? "right" : "left"}><CloudOffIcon sx={{ color: red[500] }} /></Tooltip> </>
                  }
                </div>
            }
          icon={
          
            <div style = {{textAlign: "center", top: i > 0 ? "-45px" : "0px",  position: i > 0 ? "absolute" : "none"}}>
            {
              i > 0 &&
              <IconButton onClick={ ()=> { 
                if(index>0){
                  setIndex(index-1) 
                }
              }} href= { "#link" + (i-1) } className="colorRandom"  style={{marginBottom: "5px"}}>
                <ArrowUpwardIcon></ArrowUpwardIcon>
              </IconButton>
            }
          <Tooltip title={element.tags[0]} placement={i % 2 === 0 ? "left" : "right"}>
            {/* TODO: all img alt */}
            <img style = {{backgroundColor: "white", borderRadius: "25px", padding: "5px"}} className="colorRandom" src={IMAGE_ICON_PATH + CheckBadNaming(element.tags[0]).toLowerCase() + EXTENSION_PNG} width={"100%"} height={"100%"}/>
          </Tooltip>
          {
            i < (data.length-1) &&
            <IconButton  onClick={ ()=> { 
              if(index<data.length-1){
                setIndex(index+1) 
              }
            } } href= { "#link" + (i+1) } className="colorRandom">
              <ArrowDownwardIcon></ArrowDownwardIcon>
              </IconButton>
          }
          </div>
          }
        >
        <div className="centerText">
            <Element url={element.type} width={"100%"} height={"100%"} />
                  <CardActions disableSpacing>
                    {
                      element.tags.map((tag) => {
                        return(
                          <Tooltip title={tag}>
                            {/* TODO: all img alt */}
                            <img src={IMAGE_ICON_PATH + CheckBadNaming(tag).toLowerCase() + EXTENSION_PNG} width={32} height={32} id="testImage" style={{backgroundColor:mainColor, minWidth: "32px", minHeight: "32px"}}></img>
                          </Tooltip>
                        )
                      })
                    }
                    <ExpandMore
                      expand={element.expanded}
                      onClick={()=>{
                        expand(i)
                      }}
                      aria-expanded={element.expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={element.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      {
                        element.description.map((el)=>{
                          return(
                            <Typography paragraph>{el}</Typography>
                          )
                        })
                      }
                    </CardContent>
                  </Collapse>
        </div>
      </VerticalTimelineElement>
      </Fragment>
    )
  })}
  
</VerticalTimeline>

}
    
      </Box>
  
              
      <Box component="section" style={{marginTop: "20px"}} sx={{ p: 2 }}>
  
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
        <Grid item xs={4} sm={4} md={12}>
          <Divider style={{marginBottom: "20px"}}/>
          Vous souhaitez en apprendre plus sur moi ?
          Télécharger mon CV !
        </Grid>
        <Grid item xs={4} sm={4} md={12}>
          <Button style={{backgroundColor: mainColor, color: "white"}} color="secondary" size="large" endIcon={<DownloadIcon />} href="/files/cv.pdf" target="_blank" rel="noreferrer">Télécharger</Button>
        </Grid>
        <Grid item xs={4} sm={4} md={12} id="contact">
          <Divider style={{marginBottom: "20px"}}/>
          {/* TODO: put all values in const file */}
          <Tooltip title={"Tel : +33783047522"}><a href="tel:+33783047522" target="_blank" rel="noreferrer"><PhoneIcon style={{width: "56px", height: "56px", color: "green", borderRadius: "50px", border: "2px solid", padding: "3px", marginRight: "15px"}}/></a></Tooltip>
          <Tooltip title={"Mail : sadous.gaetan@gmail.com"}><a href="mailto:sadous.gaetan@gmail.com" target="_blank" rel="noreferrer"><MailIcon style={{width: "56px", height: "56px", color: "white", borderRadius: "50px", border: "2px solid", padding: "3px", marginRight: "15px"}}/></a></Tooltip>
          <Tooltip title={"Linkedin : https://www.linkedin.com/in/sadous-ga%C3%ABtan"}><a href="https://www.linkedin.com/in/sadous-ga%C3%ABtan" target="_blank" rel="noreferrer"><LinkedInIcon style={{width: "56px", height: "56px", color: "blue", borderRadius: "50px", border: "2px solid", padding: "3px", marginRight: "15px"}}/></a></Tooltip>
          <Tooltip title={"Github : https://github.com/gaetanse?tab=repositories"}><a href="https://github.com/gaetanse?tab=repositories" target="_blank" rel="noreferrer"><GitHubIcon style={{width: "56px", height: "56px", color: "black", borderRadius: "50px", border: "2px solid", padding: "3px"}}/></a></Tooltip>
        </Grid>
      </Grid>

      </Box>
  
  <BottomNavigation id="bottom" showLabels style={{backgroundColor: mainColor }}>
    <BottomNavigationAction label="© 2024. Tous droits réservés." disabled={true} id="testText" style={{color:"white"}}/>
    <BottomNavigationAction label="Scroll en haut ↑" href="#top" id="testText" style={{color:"white"}}/>
  </BottomNavigation>
  
      </ThemeProvider>
        </header>
        </div>

  )

}

export default App;