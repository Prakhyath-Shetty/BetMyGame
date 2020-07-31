import React from "react";
import { connect } from "react-redux";
import Houses from "../../components/Houses/Houses";
import { bindActionCreators } from "redux";
import { setHouseColours, updateBoardSettings } from "../../actions";
interface PlayerGroundProps {
  colours: any;
  setHouseColours: any;
  updateBoardSettings: any;
  houseTwoCards: any;
  houseThreeCards: any;
  houseFourCards: any;
  gameData: any;
  setDisabledHousesComplete: any;
  gameBoardHeight: any;
  disabledHouses: any;
}

interface PlayerGroundState {}
class PlayerGround extends React.Component<
  PlayerGroundProps,
  PlayerGroundState
> {
  state = {};
  componentDidMount() {
    const winHeight = window.innerHeight * 0.95;
    const settings = {
      gameBoardHeight: winHeight,
      sideBoardWidth: window.innerWidth - winHeight,
    };
    const colours = this.props.colours;
    if (colours) {
      this.props.setHouseColours(colours);
    }
    this.props.updateBoardSettings(settings);
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (
      prevState !== nextProps &&
      nextProps.notification &&
      Object.keys(nextProps.notification).length > 0
    ) {
      const { type, message, title } = nextProps.notification;
      //Toastr[type.toLowerCase()](message, title);
    }
    return null;
  }

  render() {
    const winSize = window.innerHeight * 0.95;
    const gameContainerStyle = {
      height: winSize,
      display: "flex",
      justifyContent: "center",
    };
    return (
      <div className="game-frame">
        <div style={gameContainerStyle}>
          <Houses />
          {/* <SideBoard /> */}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setHouseColours,
      updateBoardSettings,
    },
    dispatch
  );
};
const mapStateToProps = ({ gameData, gameSettings }: any) => {
  return {
    notification: gameData.notification,
    colours: gameSettings.colours,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerGround);
