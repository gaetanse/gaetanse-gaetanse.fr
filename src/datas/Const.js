//dates
export const MMXXIV = "2024"
export const MMXXIII = "2023"
export const MMXXII = "2022"
export const MMXXI = "2021"
export const MMXIX = "2019"
export const MMXVIII = "2018"
export const MMXVII = "2017"
//tags
export const TAG_HTML = "Html"
export const TAG_REACT = "React"
export const TAG_ANTD = "Antd"
export const TAG_CSS = "Css"
export const TAG_JSON = "Json"
export const TAG_OPENGL = "Opengl"
export const TAG_JAVASCRIPT = "Javascript"
export const TAG_TYPESCRIPT = "Typescript"
export const TAG_MYSQL = "Mysql"
export const TAG_PHP = "Php"
export const TAG_MATERIAL_UI = "Material Ui"
export const TAG_SYMFONY = "Symfony"
export const TAG_VUEJS = "VueJS"
export const TAG_GAME_OFF_2018 = "Game Off 2018"
export const TAG_BOOTSTRAP = "Bootstrap"
export const TAG_UNREAL_ENGINE_5 = "Unreal Engine 5"
export const TAG_2D = "2D"
export const TAG_3D = "3D"
export const TAG_SFML = "Sfml"
export const TAG_SEMANTIC = "Semantic"
export const TAG_TCP_IP = "Tcp Ip"
export const TAG_BOX2D = "Box2D"
export const TAG_POEDIT = "Poedit"
export const TAG_LUA = "Lua"
export const TAG_STEAM = "Steam"
export const TAG_UNITY = "Unity"
export const TAG_ANDROID = "Android"
export const TAG_SQLITE = "Sqlite"
export const TAG_JAVA = "Java"
export const TAG_WORDPRESS = "Wordpress"
export const TAG_CPLUSPLUS = "C++" // bad_naming
export const TAG_DOTNET = ".NET" // bad_naming
export const TAG_CSHARP = "C#" // bad_naming
// Association tags -> couleurs
export const tagColors = {
    [TAG_HTML]: "#CDA434",         // inchangé
    [TAG_REACT]: "#252850",        // inchangé
    [TAG_ANTD]: "#763C28",         // inchangé
    [TAG_CSS]: "#A12312",          // inchangé
    [TAG_JSON]: "#D9534F",         // changé
    [TAG_OPENGL]: "#7B3F61",       // changé, nouveau
    [TAG_JAVASCRIPT]: "#212121",   // inchangé
    [TAG_TYPESCRIPT]: "#909090",   // inchangé
    [TAG_MYSQL]: "#4C2F27",        // inchangé
    [TAG_PHP]: "#1D334A",          // inchangé
    [TAG_MATERIAL_UI]: "#FF5733",  // changé, nouveau
    [TAG_SYMFONY]: "#755C48",      // inchangé
    [TAG_VUEJS]: "#6D6552",        // inchangé
    [TAG_GAME_OFF_2018]: "#403A3A",// inchangé
    [TAG_BOOTSTRAP]: "#7F7679",    // inchangé
    [TAG_UNREAL_ENGINE_5]: "#F4A900",// inchangé
    [TAG_2D]: "#FF6F61",           // changé, nouveau
    [TAG_3D]: "#35682D",           // inchangé
    [TAG_SFML]: "#193737",         // inchangé
    [TAG_SEMANTIC]: "#8A9597",     // inchangé
    [TAG_TCP_IP]: "#3F888F",       // inchangé
    [TAG_BOX2D]: "#FAD201",        // inchangé
    [TAG_POEDIT]: "#6C6874",       // inchangé
    [TAG_STEAM]: "#641C34",        // inchangé
    [TAG_UNITY]: "#F4F4F4",        // inchangé
    [TAG_ANDROID]: "#F5D033",      // inchangé
    [TAG_SQLITE]: "#7FB5B5",       // inchangé
    [TAG_JAVA]: "#3A405A",         // changé
    [TAG_WORDPRESS]: "#2271B3",    // inchangé
    [TAG_CPLUSPLUS]: "#5A3D55",    // changé, nouveau
    [TAG_DOTNET]: "#B44C43",       // inchangé
    [TAG_CSHARP]: "#59351F",        // inchangé
    [TAG_LUA]: "#3750c2"        // inchangé
  };
//VALID NAMES
const CPLUSPLUS_VALID = "cplusplus"
const DOTNET_VALID = "dotnet"
const CSHARP_VALID = "csharp"
//paths
export const IMAGE_PATH = "/images/"
export const IMAGE_PREVIEW_PATH = "/images/previews/"
export const IMAGE_ICON_PATH = "/images/icons/"
export const VIDEO_PATH = "/videos/"
//projects TODO: remove duplicate and use only one (rename files)

export const PROJECT_BIGTOWN = "bigtown_compress"

export const TITLE_GAETANSE_FR = "Gaetanse.fr"
export const PROJECT_GAETANSE_FR = "gaetanse_fr"
export const CUSTOM_LINK_GAETANSE_FR = "https://github.com/gaetanse/gaetanse.fr"
export const DESCRIPTION_GAETANSE_FR_1 = "Projet de portfolio en utilisant React et Material Ui ainsi que du CSS pur."

export const TITLE_IOT_MODULE = "IOT-Modules"
export const CUSTOM_LINK_IOT_MODULE = "https://github.com/gaetanse/IOT-Modules"
export const PROJECT_IOT_MODULE = "iot_modules_compress"
export const PREVIEW_IOT_MODULE = "iot-modules"
export const DESCRIPTION_IOT_MODULE_1 = "Projet simulant le fonctionnement de modules. Création de données aléatoires en tâche de fond. Stockage de ces données dans une base de donnée sous SQLite."

export const PROJECT_MATCH = "match_compress"
export const PROJECT_DST = "dst_compress"
export const PROJECT_STAYSAFE = "staysafe_compress"

export const PREVIEW_FRENCDSTMOD = "french_translate_dst_mod"

export const CUSTOM_LINK_MATCH = "https://github.com/gaetanse/match"
export const CUSTOM_LINK_CHAR = "https://github.com/gaetanse/char-project"
export const CUSTOM_LINK_FILMOTHEQUE = "https://github.com/gaetanse/Filmotheque-VueJS"
export const CUSTOM_LINK_ADOPTE_UN_CHAT = "https://github.com/gaetanse/adopteUnChat"
export const CUSTOM_LINK_CUBE_THAT_DO_THINGS = "https://github.com/gaetanse/cubeThatDoThings"
export const CUSTOM_LINK_MAP = "https://github.com/gaetanse/map"
export const CUSTOM_LINK_POKEMON = "https://github.com/gaetanse/redux-react-pokemon"
export const CUSTOM_LINK_IMC = "https://github.com/gaetanse/react-express-imc"
export const CUSTOM_LINK_SMASH_PATANIMAL = "https://github.com/gaetanse/Smash-Patanimal"

//extension
export const EXTENSION_PNG = ".png"
export const EXTENSION_MP4 = ".mp4"
//colors
export const mainColor = "#b0b9a8"
export function colorName(input)
{
    return input
}
//rewrite bad naming
export function CheckBadNaming(input)
{
    let srcName = input
    if(input===TAG_CSHARP) srcName = CSHARP_VALID
    else if(input===TAG_DOTNET) srcName = DOTNET_VALID
    else if(input===TAG_CPLUSPLUS) srcName = CPLUSPLUS_VALID
    return srcName
}
//file complete
export function fileCompleteName(type, input, extension)
{
    if(extension==undefined)
    {
        if(type.startsWith(IMAGE_PATH))
        {
            extension = EXTENSION_PNG
        }
        else if(type.startsWith(VIDEO_PATH))
        {
            extension = EXTENSION_MP4
        }
    }
    const fullName = type + input + extension
    return fullName.toLowerCase()
}
//handle error file
export function handleErrorFile(e)
{
    e.target.src = "/erreur-404.png"
    e.target.alt = "made by design-circle : https://www.flaticon.com/fr/auteurs/design-circle"
}