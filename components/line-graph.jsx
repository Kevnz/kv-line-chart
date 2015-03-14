class LineGraph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        var calculateRange = function (data) {

        }
        return (
            <svg className="graph">
              <Grid></Grid>
            </svg>
        );
    }
}