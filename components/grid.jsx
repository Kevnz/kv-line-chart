class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //okay, we have an x range, and a y range and a width, and a height
        //calculate the size the grid takes up
        //x-grid 
        return (
            <g>
                <g className="grid x-grid" id="xGrid">
                  <line x1="113" x2="113" y1="10" y2="380"></line>
                  <line x1="259" x2="259" y1="10" y2="380"></line>
                  <line x1="405" x2="405" y1="10" y2="380"></line>
                  <line x1="551" x2="551" y1="10" y2="380"></line>
                  <line x1="697" x2="697" y1="10" y2="380"></line>
                </g>
                <g className="grid y-grid" id="yGrid">
                  <line x1="86" x2="697" y1="10" y2="10"></line>
                  <line x1="86" x2="697" y1="68" y2="68"></line>
                  <line x1="86" x2="697" y1="126" y2="126"></line>
                  <line x1="86" x2="697" y1="185" y2="185"></line>
                  <line x1="86" x2="697" y1="243" y2="243"></line>
                  <line x1="86" x2="697" y1="301" y2="301"></line>
                  <line x1="86" x2="697" y1="360" y2="360"></line>
                </g>
            </g>
        );
    }
}