import { compose } from "redux"
import { connect } from "react-redux"
import { set, remove } from "model/redux/actions"
import { EditPanel as _EditPanel } from "./cards/EditPanel"
import { Header as _Header } from "./layout/Header"
import { Login as _Login } from "./login/Login"
import * as I from "model/types"

//DevButtons
import { Back as _Back } from "view/components/buttons/Back"

//Import Components
import { TextInput as _TextInput } from "view/components/textInput/TextInput"
import { PickNumberWithText as _PickNumberWithText } from "view/components/options/PickNumberWithText"
import { Next as _Next } from "view/components/buttons/Next"

//Import Selectors
import { color_selector } from "model/redux/selectors"

//Chart Imports
import { DonutChart as _DonutChart } from "view/charts/DonutChart"
import { IncomeChart as _IncomeChart } from "view/charts/IncomeChart"
import { SavingsChart as _SavingsChart } from "view/charts/SavingsChart"
import { NetWorthChart as _NetWorthChart } from "view/charts/NetWorthChart"
import { TaxesChart as _TaxesChart } from "view/charts/TaxesChart"
import { SpendingChart as _SpendingChart } from "view/charts/SpendingChart"

//DevTools
import { DevToolBox as _DevToolBox } from "view/components/devTools/DevToolBox"

//HOC Imports
import { PrivateRoute as _PrivateRoute } from "view/components/HOC/PrivateRoute"

const mapStateToProps = (state: I.state) => ({
  state,
  color_selector: color_selector(state),
})

//Buttons
export { AddButton } from "./buttons/AddButton"
export { AddPrompt } from "./buttons/AddPrompt"

export const Back = compose(connect(mapStateToProps))(_Back)
export { Button } from "./buttons/Button"
export { LinkButton } from "./buttons/LinkButton"
export { Exit } from "./buttons/Exit"
export const Next = compose(connect(mapStateToProps, { set }))(_Next)

export { SocialMediaIcons } from "./buttons/SocialMediaIcons"

//Displays
export { IncomeDisplay } from "./displays/IncomeDisplay"

//DevTools
export const DevToolBox = compose(connect(mapStateToProps, { set }))(_DevToolBox)

//Cards
export { Comment } from "./cards/Comment"
export { InfoCard } from "./cards/InfoCard"
export { TripleSliderSelector } from "./cards/TripleSliderSelector"
export { Paragraph } from "./cards/Paragraph"

//Dropdowns
export { ColorSelect } from "./dropdowns/ColorSelect"
export { Dropdown } from "./dropdowns/Dropdown"

//Higher Order Components
export const PrivateRoute = compose(connect(mapStateToProps, { set }))(_PrivateRoute)
export { Loading } from "./HOC/Loading"

//layout
export const Header = compose(connect(mapStateToProps, { set, remove }))(_Header)
export { Footer } from "./layout/Footer"

//login
export const Login = compose(connect(mapStateToProps, { set, remove }))(_Login)

//Nav
export { Arrow } from "./nav/Arrow"
export { ChartNav } from "./nav/ChartNav"
export { ProgressBar } from "./nav/ProgressBar"
export { SideNav } from "./nav/SideNav"
export { TripleSelector } from "./nav/TripleSelector"
export { Selector } from "./nav/Selector"

//Options
export { DualSelect } from "./options/DualSelect"
export { PickMultipleOptions } from "./options/PickMultipleOptions"
export { PickNumber } from "./options/PickNumber"
export { PickSingleOption } from "./options/PickSingleOption"
export const PickNumberWithText = compose(connect(mapStateToProps, { set, remove }))(_PickNumberWithText)

//Panels

export { AssumptionsPanel } from "view/components/panels/AssumptionsPanel"

//Scroll
export { ScrollCircles } from "./scroll/ScrollCircles"

//Sliders
export { MultiSliders } from "./sliders/MultiSliders"
export { Slider } from "./sliders/Slider"

//Text Input

export { EditTitle } from "./textInput/EditTitle"

//Smart Components Connected to Redux

export const EditPanel = compose(connect(mapStateToProps, { set, remove }))(_EditPanel)

//Smart Components Connected to Redux

export { AreaChart } from "view/charts/AreaChart"

export const TextInput = compose(connect(mapStateToProps, { set, remove }))(_TextInput)

export const DonutChart = compose(connect(mapStateToProps, { set }))(_DonutChart)

export const IncomeChart = compose(connect(mapStateToProps, { set }))(_IncomeChart)
/**
 * The <SavingsChart> renders a chart showing the users savings from age 18-95.
 *  */

export const SavingsChart = compose(connect(mapStateToProps, { set }))(_SavingsChart)

/**
 * The <NetWorthChart> renders a chart showing the users net worth from current age until  95.
 *  */

export const NetWorthChart = compose(connect(mapStateToProps, { set }))(_NetWorthChart)
/**
 * The <TaxesChart> renders a chart showing the users Taxes from current age until  95.
 *  */

export const TaxesChart = compose(connect(mapStateToProps, { set }))(_TaxesChart)
/**
 * The <SpendingChart> renders a chart showing the users spending from current age until  95.
 *  */

export const SpendingChart = compose(connect(mapStateToProps, { set }))(_SpendingChart)
