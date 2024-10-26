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
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import MailIcon from '@mui/icons-material/Mail'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DownloadIcon from '@mui/icons-material/Download'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
import CloudOffIcon from '@mui/icons-material/CloudOff'
import GridItemMultipleTooltip from './components/GridItemMultipleTooltip'
import GitHubIcon from '@mui/icons-material/GitHub'
import PhoneIcon from '@mui/icons-material/Phone'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Divider from '@mui/material/Divider'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import TextField from '@mui/material/TextField';
import { red } from '@mui/material/colors'
import { Tooltip } from '@mui/material'
import emailjs from 'emailjs-com';

import { importData } from "./datas/ProjetsData"
import { tagColors, handleErrorFile, IMAGE_ICON_PATH, EXTENSION_PNG, mainColor, CheckBadNaming, TAG_REACT, TAG_LUA, TAG_JAVASCRIPT, TAG_TYPESCRIPT, TAG_CSHARP, TAG_DOTNET, TAG_PHP, TAG_SYMFONY, TAG_JAVA, TAG_CPLUSPLUS, TAG_UNREAL_ENGINE_5, TAG_OPENGL, TAG_STEAM, TAG_SFML, TAG_BOX2D, TAG_HTML, TAG_CSS, TAG_MYSQL, TAG_BOOTSTRAP, TAG_ANTD, TAG_SEMANTIC, TAG_ANDROID, TAG_POEDIT, TAG_JSON } from './datas/Const'

import './App.css'
import 'react-vertical-timeline-component/style.min.css'

//TODO: remove unnecessary imports / remove all ';'

const pages = ['À propos', 'Projets', 'CV', 'Contact']
const links = ['#top', '#projects', '#cv', '#contact']
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

//TODO: put all in const file
//TODO: remove all unnecessary things

function App_new() 
{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const [USER_ID] = useState(process.env.REACT_APP_USER_ID)
  const [TEMPLATE_ID] = useState(process.env.REACT_APP_TEMPLATE_ID)
  const [SERVICE_ID] = useState(process.env.REACT_APP_SERVICE_ID)

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    if(name.length>0 && email.length>0 && email.includes("@") && message.length > 0)
    {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
        .then(() => {
          setStatus('Message envoyé avec succès!')
          setName('')
          setEmail('')
          setMessage('')
        }, () => {
          setStatus('Échec de l\'envoi du message.')
        });
    }
    else{
      setStatus('Veuillez remplir correctement les informations !');
    }

  }

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

        {/*<div class="background">
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
        </div>*/}

        <AppBar position="sticky" style={{background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(2px)"}}>
        <Container maxWidth="xl" style={{width: "auto"}}>
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
                style={{color: "black"}} />
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
                  <h1>{page}</h1>
                </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* TODO: all img alt */}
            <img src="/files/favicon.ico" width={92} height={92} className="customMarginRigth" style={{animation: "grow 2s ease forwards"}} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} onError={(e)=>{handleErrorFile(e)}}></img>
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
                    <h1 style={{marginRight: "32px", marginLeft: "32px"}}>{page}</h1>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>


      <div className="container">
        <div className="box">
              <div className="custom_width_1" style={{border: "0px solid rgba(0, 0, 0, 0.4)", padding: "20px 35px", borderRadius: "15px", margin: "30px 0px 30px 25%", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)"}}>
                <p>👋 Bonjour, je suis<br/></p>
                <h1><b>Gaëtan Sadous</b></h1>
              </div>
              <div className="custom_width_1" style={{border: "0px solid rgba(0, 0, 0, 0.4)", padding: "20px 35px", borderRadius: "15px", margin: "30px 0px 30px 25%", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)"}}>
                <p>Bienvenue sur mon portfolio</p>
              </div>
              <div className="custom_width_2" style={{border: "0px solid rgba(0, 0, 0, 0.4)", padding: "20px 35px", borderRadius: "15px", margin: "30px 0px 30px 25%", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)"}}>
                <p>Développeur<br/>
                Fullstack</p>
              </div>
        </div>
        {/*<div className="box">
          <img src={"/images/previews/6KtBk6lJ_dHLHG5aSzmo0-transformed.png"} 
            style={{
              backgroundImage: "url('/images/previews/circle.ae5f84b3853b9e34aa83cf8dada715c5.svg')",
              height: '100%', // Set your desired height
              backgroundSize: '85%', // Cover the entire div
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 65%', // Centered horizontally and 20% from the top
            }}></img>
        </div>*/}
        <div className="box">
          <div
            className="image-container"
            style={{
              backgroundImage: "url('/images/previews/circle.ae5f84b3853b9e34aa83cf8dada715c5.svg')",
              backgroundSize: '85%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 65%',
              height: '100%',
              position: 'relative',
            }}
          >
            <img
              src="/images/previews/6KtBk6lJ_dHLHG5aSzmo0-transformed.png"
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              alt="Preview"
            />
          </div>
        </div>
        <div className="box">
              <div style={{border: "0px solid rgba(0, 0, 0, 0.4)", padding: "20px 35px", borderRadius: "15px", margin: "25px 0px 25px 0%"}}>
                    {
                        [TAG_JAVASCRIPT].map((name,index)=>
                        {
                            const srcName = CheckBadNaming(name).toLowerCase()
                            // TODO: <img> add alt to it (using alts)
                            return (<Tooltip key={""} title={name} arrow><img className="customImgSize1" src={ IMAGE_ICON_PATH + srcName + EXTENSION_PNG }
                              style={{
                              backgroundImage: "url('/images/previews/circle.ae5f84b3853b9e34aa83cf8dada715c5.svg')",
                              backgroundSize: '100%', // Cover the entire div
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center', // Centered horizontally and 20% from the top
                              borderRadius: '100px',
                              padding: '25px'
                            }} onError={(e)=>{handleErrorFile(e)}}/></Tooltip>)
                        })
                    }
              </div>
              <div style={{border: "0px solid rgba(0, 0, 0, 0.4)", padding: "20px 35px", borderRadius: "15px", margin: "25px 0px 25px 20%"}}>
                    {
                        [TAG_REACT].map((name,index)=>
                        {
                            const srcName = CheckBadNaming(name).toLowerCase()
                            // TODO: <img> add alt to it (using alts)
                            return (<Tooltip key={""} title={name} arrow><img className="customImgSize2" src={ IMAGE_ICON_PATH + srcName + EXTENSION_PNG }
                              style={{
                              backgroundImage: "url('/images/previews/circle.ae5f84b3853b9e34aa83cf8dada715c5.svg')",
                              backgroundSize: '100%', // Cover the entire div
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center', // Centered horizontally and 20% from the top
                              borderRadius: '100px',
                              padding: '25px'
                            }} onError={(e)=>{handleErrorFile(e)}}/></Tooltip>)
                        })
                    }
              </div>
              <div style={{border: "0px solid rgba(0, 0, 0, 0.4)", padding: "20px 35px", borderRadius: "15px", margin: "25px 0px 25px 10%"}}>
                    {
                        [TAG_DOTNET].map((name,index)=>
                        {
                            const srcName = CheckBadNaming(name).toLowerCase()
                            // TODO: <img> add alt to it (using alts)
                            return (<Tooltip key={""} title={name} arrow><img className="customImgSize1" src={ IMAGE_ICON_PATH + srcName + EXTENSION_PNG } 
                              style={{
                                backgroundImage: "url('/images/previews/circle.ae5f84b3853b9e34aa83cf8dada715c5.svg')",
                                backgroundSize: '100%', // Cover the entire div
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center', // Centered horizontally and 20% from the top
                                borderRadius: '100px',
                                padding: '25px'
                              }} onError={(e)=>{handleErrorFile(e)}}/></Tooltip>)
                        })
                    }
              </div>
        </div>

<div className="full-width-box">
  
    <h1>
    Technologies courantes :
    </h1>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginTop: "10px", marginBottom: "20px"}} justifyContent="center">
              <GridItemMultipleTooltip item_names={[TAG_REACT, TAG_JAVASCRIPT, TAG_TYPESCRIPT]}/>
              <GridItemMultipleTooltip item_names={[TAG_CSHARP, TAG_DOTNET]}/>
              <GridItemMultipleTooltip item_names={[TAG_PHP, TAG_SYMFONY]}/>
              <GridItemMultipleTooltip item_names={[TAG_JAVA]}/>
            </Grid>
    <h1>
      Autres technologies :
    </h1>
      
    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginTop: "10px", marginBottom: "16px"}} justifyContent="center">
            <GridItemMultipleTooltip item_names={[TAG_CPLUSPLUS, TAG_UNREAL_ENGINE_5, TAG_OPENGL]}/>
            <GridItemMultipleTooltip item_names={[TAG_STEAM, TAG_SFML, TAG_BOX2D]}/>
            <GridItemMultipleTooltip item_names={[TAG_HTML, TAG_CSS, TAG_MYSQL]}/>
            <GridItemMultipleTooltip item_names={[TAG_BOOTSTRAP, TAG_ANTD, TAG_SEMANTIC]}/>
            <GridItemMultipleTooltip item_names={[TAG_JSON, TAG_ANDROID, TAG_POEDIT, TAG_LUA]}/>
          </Grid>

</div>

<div className="full-width-box">
              
<Box component="section" sx={{ p: 2 }} id="projects">
    <h1 style={{marginBottom: "10px"}}>
      Mes projets :
    </h1>

  {data !== undefined && 
      data.length > 0 && data.map((element,i)=>{
        return(
          <>
          <div className="mini_container" style={{borderTop: "2px solid #b0b9a8"}}>
            <div className="mini_box" style={{borderRadius: "20px"}}>
            {
                      element.tags.map((tag) => {
                        return(
                          <Tooltip title={tag} className="wobble-on-hover">
                            {/* TODO: all img alt */}
                            <img src={IMAGE_ICON_PATH + CheckBadNaming(tag).toLowerCase() + EXTENSION_PNG} className="ico_size" id="testImage" onError={(e)=>{handleErrorFile(e)}}></img>
                          </Tooltip>
                        )
                      })
                    }
            </div>
            <div className="mini_box" style={{borderRadius: "20px"}}>
            <Element name={element.name} description={element.description} preview={element.preview} url={element.type} width={"100%"} height={"auto"} />
            </div>
            <div className="mini_box mini_box_custom" style={{borderRadius: "20px"}}>

            </div>
          <div className="mini_box customBackground" style={{borderRadius: "5px"}}>
                    <CardContent style={{padding: "0px"}}>
                    <b>{element.name}</b> ({ element.date })
                    <br/><br/>
                    {
                      element.custom_link !== "" ? <div><a href={element.custom_link} target="_blank" rel="noreferrer" style={{color:"blue"}}>Lien disponible!</a></div> : <div style={{color: "red"}} >Lien indisponible!</div>
                    }
                    <br/>
                      {
                        element.description.map((el)=>{
                          return(
                            <Typography paragraph>{el}</Typography>
                          )
                        })
                      }
                      {
                        element.tags.map((tag) => {
                          return(
                            <span style={{color: tagColors[tag]}}><b>#{ CheckBadNaming(tag).toLowerCase().charAt(0).toUpperCase() + CheckBadNaming(tag).toLowerCase().slice(1) }</b> </span>                            
                          )
                        })
                      }
                    </CardContent>
          </div>
            <div className="mini_box mini_box_custom" style={{borderRadius: "20px"}}>
              
            </div>
  </div>
            </>
        )
      }
      )
  }
    
      </Box>

</div>
<div className="full-width-box" id="cv">
              
  <Box component="section" style={{marginTop: "20px"}} sx={{ p: 2 }}>

  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
    <Grid item xs={4} sm={4} md={12}>
      <p>
      Vous souhaitez en apprendre plus sur moi ?
      </p>
    </Grid>
    <Grid item xs={4} sm={4} md={12}>
      <img src="/images/previews/cv alternance.png" className="CustomMaxSize"/>
    </Grid>
    <Grid item xs={4} sm={4} md={12}>
      <Button style={{backgroundColor: mainColor, color: "black"}} color="secondary" size="large" endIcon={<DownloadIcon />} href="/files/cv.pdf" target="_blank" rel="noreferrer">Téléchargez mon CV</Button>
    </Grid>
  </Grid>

  </Box>
</div>

<div className="full-width-box" id="contact">
<form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Contact rapide</h2>
      <TextField label="Nom" type="text" color="info" required value={name} onChange={(e) => setName(e.target.value)} style={{margin: "5px"}}/>
      <TextField label="Email" type="email" color="info" required value={email} onChange={(e) => setEmail(e.target.value)} style={{margin: "5px"}}/>
        <TextField
          label="Message"
          multiline
          rows={3}
          required
          color="info"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{margin: "5px", width: "75%"}}
        />
        <br/>
      <Button style={{backgroundColor: mainColor, color: "black", marginTop: "20px"}} color="secondary" size="large" type="submit">Envoyer</Button>
      <p>{status}</p>
    </form>
</div>

<div className="full-width-box" id="bottom">
  <p>
    © 2024. Tous droits réservés.
  </p>
</div>

        <div className="bottom-navbar">
            <div className="nav-item">
              <Tooltip placement="right-end" title={"Tel : +33783047522"}><a href="tel:+33783047522" target="_blank" rel="noreferrer"><PhoneIcon className="nav-icon"/></a></Tooltip>
            </div>
            <div className="nav-item">
              <Tooltip placement="right-end" title={"Mail : sadous.gaetan@gmail.com"}><a href="mailto:sadous.gaetan@gmail.com" target="_blank" rel="noreferrer"><MailIcon className="nav-icon"/></a></Tooltip>
            </div>
            <div className="nav-item">
              <Tooltip placement="right-end" title={"Linkedin : https://www.linkedin.com/in/sadous-ga%C3%ABtan"}><a href="https://www.linkedin.com/in/sadous-ga%C3%ABtan" target="_blank" rel="noreferrer"><LinkedInIcon className="nav-icon"/></a></Tooltip>
            </div>
            <div className="nav-item">
              <Tooltip placement="right-end" title={"Github : https://github.com/gaetanse?tab=repositories"}><a href="https://github.com/gaetanse?tab=repositories" target="_blank" rel="noreferrer"><GitHubIcon className="nav-icon"/></a></Tooltip>
            </div>
        </div>

      </div>
  
      </ThemeProvider>
        </header>
        </div>

  )

}

export default App_new;