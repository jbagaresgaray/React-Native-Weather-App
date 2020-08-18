import {StyleSheet} from 'react-native';
import {Colors} from './Variables';
import {FONT_REGULAR, FONT_MEDIUM, FONT_BOLD} from './Typography';

export default StyleSheet.create({
  viewFlex: {
    flex: 1,
  },
  viewFlex5: {
    flex: 0.5,
  },
  noFlex: {
    flex: 0,
  },
  viewPage: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    zIndex: 0,
  },
  viewContent: {
    backgroundColor: Colors.colorContent,
  },
  noHeaderBorder: {
    borderBottomWidth: 0,
    marginBottom: 5,
    backgroundColor: 'transparent',
  },
  noFooterBorder: {
    borderTopWidth: 0,
  },
  appPadding: {
    paddingStart: 30,
    paddingEnd: 30,
  },
  appPaddingModal: {
    paddingStart: 15,
    paddingEnd: 15,
  },
  appBackButton: {
    color: Colors.colorWhite,
  },
  appHomeButtom: {
    color: Colors.colorTitle,
  },
  appHeader: {
    backgroundColor: Colors.colorWhite,
    borderBottomWidth: 0,
  },
  appTabsHeader: {
    backgroundColor: Colors.colorWhite,
    borderBottomWidth: 0,
  },
  appContentHeader: {
    paddingLeft: 25,
  },
  appTitle: {
    fontSize: 40,
    lineHeight: 40,
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.colorTitle,
    ...FONT_REGULAR,
  },
  appModalTitle: {
    fontSize: 22,
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.colorTitle,
    ...FONT_MEDIUM,
  },
  appHeadingText: {
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.colorTitle,
    ...FONT_MEDIUM,
  },
  appNoteText: {
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.colorTitle,
    ...FONT_REGULAR,
    marginTop: 15,
  },
});
