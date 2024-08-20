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
export const TAG_CPLUSPLUS = "C++" // bad_naming
export const TAG_SEMANTIC = "Semantic"
export const TAG_TCP_IP = "Tcp Ip"
export const TAG_BOX2D = "Box2D"
export const TAG_POEDIT = "Poedit"
export const TAG_STEAM = "Steam"
export const TAG_CSHARP = "C#" // bad_naming
export const TAG_UNITY = "Unity"
export const TAG_ANDROID = "Android"
export const TAG_DOTNET = ".NET" // bad_naming
export const TAG_SQLITE = "Sqlite"
export const TAG_JAVA = "Java"
//paths
export const IMAGE_PATH = "/images/"
export const IMAGE_ICON_PATH = "/images/icons/"
export const VIDEO_PATH = "/videos/"
//projects
export const PROJECT_BIGTOWN = "bigtown_compress"
//extension
export const EXTENSION_PNG = ".png"
export const EXTENSION_MP4 = ".mp4"
//colors
export const mainColor = "#606C5A"
//rewrite bad naming
export function CheckBadNaming(input)
{
    let srcName = input
    if(input===TAG_CSHARP) srcName = "csharp"
    else if(input===TAG_DOTNET) srcName = "dotNet"
    else if(input===TAG_CPLUSPLUS) srcName = "cplusplus"
    return srcName.toLowerCase()
}
//file complete
export function fileCompleteName(type, input, extension)
{
    const fullName = type + input + extension
    return fullName.toLowerCase()
}