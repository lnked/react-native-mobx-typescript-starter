class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#fff"
        />
      ),
    };
  }

    componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

    state = {
    count: 0,
  };

    _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  /* later in the render function we display the count */
}
