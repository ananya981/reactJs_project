import React from 'react';
import './dashboard.css';
import Header from '../../Header/header';
import { connect } from 'react-redux';



class dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state={
      }
    }

    render() {
        console.log(this.props.list.dataList, 'TEST')  
        const dataL=  this.props.list.dataList;
        return (
            <div>
                <div> <Header /></div>
                <div>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>GENDER</th>
                            <th>EMAIL</th>
                            <th>PHONE NO.</th>
                        </tr>
                        
                            {dataL.map((data) =>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.gender}</td>
                                <td>{data.email}</td>
                                <td>{data.phoneNo}</td>
                            </tr>
                            )} 
                        
                    </table>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = ({ list }) => {
    return {
        list
    };
}

export default connect(mapStateToProps) (dashboard)

// export default dashboard