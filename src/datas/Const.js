//dates
export const MMXXIV = "2024"
export const MMXXIII = "2023"
export const MMXXII = "2022"
export const MMXXI = "2021"
export const MMXIX = "2019"
export const MMXVIII = "2018"
export const MMXVII = "2017"
//tags
export const TAG_HTML = CheckBadNaming("Html")
export const TAG_REACT = CheckBadNaming("React")
export const TAG_ANTD = CheckBadNaming("Antd")
export const TAG_CSS = CheckBadNaming("Css")
export const TAG_JSON = CheckBadNaming("Json")
export const TAG_OPENGL = CheckBadNaming("Opengl")
export const TAG_JAVASCRIPT = CheckBadNaming("Javascript")
export const TAG_TYPESCRIPT = CheckBadNaming("Typescript")
export const TAG_MYSQL = CheckBadNaming("Mysql")
export const TAG_PHP = CheckBadNaming("Php")
export const TAG_MATERIAL_UI = CheckBadNaming("Material Ui")
export const TAG_SYMFONY = CheckBadNaming("Symfony")
export const TAG_VUEJS = CheckBadNaming("VueJS")
export const TAG_GAME_OFF_2018 = CheckBadNaming("Game Off 2018")
export const TAG_BOOTSTRAP = CheckBadNaming("Bootstrap")
export const TAG_UNREAL_ENGINE_5 = CheckBadNaming("Unreal Engine 5")
export const TAG_2D = CheckBadNaming("2D")
export const TAG_3D = CheckBadNaming("3D")
export const TAG_SFML = CheckBadNaming("Sfml")
export const TAG_CPLUSPLUS = CheckBadNaming("C++")
export const TAG_SEMANTIC = CheckBadNaming("Semantic")
export const TAG_TCP_IP = CheckBadNaming("Tcp Ip")
export const TAG_BOX2D = CheckBadNaming("Box2D")
export const TAG_POEDIT = CheckBadNaming("Poedit")
export const TAG_STEAM = CheckBadNaming("Steam")
export const TAG_CSHARP = CheckBadNaming("C#") // bad_naming
export const TAG_UNITY = CheckBadNaming("Unity")
export const TAG_ANDROID = CheckBadNaming("Android")
export const TAG_DOTNET = CheckBadNaming(".NET") // bad_naming
export const TAG_SQLITE = CheckBadNaming("Sqlite")
export const TAG_JAVA = CheckBadNaming("Java")
//paths
export const IMAGE_ICON_PATH = "images/icons/"
//extension
export const EXTENSION_PNG = ".png"
//colors
export const mainColor = "#606C5A"
//rewrite bad naming
export function CheckBadNaming(input)
{
    let srcName = input
    if(input==="C#") srcName = "csharp"
    else if(input===".NET") srcName = "dotNet"
    else if(input==="C++") srcName = "cplusplus"
    return srcName.toLowerCase()
}