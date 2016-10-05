import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';

export default ThemeManager.modifyRawThemePalette(
    ThemeManager.getMuiTheme(LightRawTheme),
    {
            primary1Color: Colors.cyan500,
            primary2Color: Colors.cyan700,
            primary3Color: Colors.lightBlack,
            accent1Color: Colors.green400,
            accent2Color: Colors.grey100,
            accent3Color: Colors.grey500,
            textColor: Colors.blueGrey800,
            alternateTextColor: Colors.white,
            canvasColor: Colors.white,
            borderColor: Colors.grey300,
            disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
            pickerHeaderColor: Colors.cyan500
    }
)