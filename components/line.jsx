class Line extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <line 
              x1={this.props.x1} 
              x2={this.props.x2}  
              y1={this.props.y1}  
              y2={this.props.y2} 
            ></line>
        );
    }
}