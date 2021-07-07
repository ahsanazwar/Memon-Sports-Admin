import React from "react";
import { Row, Col, Layout, Switch, Table, notification, Input, Radio   } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import { withCookies } from 'react-cookie';
import { capitalize } from "lodash";
import moment from "moment";

class PlayersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'players',
            secret: null,
            loginType:true,
            apiLoading: false,
            dataSource: [],
            total: 0, 
            filters: {
                "fetch": ["games"]
            },
            defaultLimit:3,
            params: {
                limit: 3,
                offset: 0
            },
            loading : true,
            radioOptions : [
                { label: 'Player Register Number', value: 'reg_number', checked: false  },
                { label: 'Jamaat Name', value: 'players.jamaat_name', checked: false },
                { label: 'Player Name', value: 'players.name', checked: true},
                { label: 'Player Phone', value: 'players.phone', checked: false }
            ]
        }; 
    }

    componentDidMount(){
        
        this.fetchPlayers(); 
    }

    fetchPlayers = () => {
        this.setState({
            loading:true
        });

        this.props.actions.playersList(this.state.params, {filters:this.state.filters}, {
            Authorization: this.props.cookies.get('user').token
        }).then(res=>{
            if(res.data) {
               this.setState({
                dataSource: res.data.players,
                total: res.data.totalPlayers,
                loading : false
               }); 
            }
            
        });
    }
    openNotification = (type, title, description) => {
        notification[type]({
            placement: 'topRight',
            bottom: 50,
            message: title,
            description: description
        });
    }
 

    // 
        
    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'players.name',
            sorter: true,
            render: (text, row, index) => {
                return(
                    <div className="profileTable"> 
                        <img src={row.profileImage && 'http://localhost:3000/'+row.profileImage || 'https://via.placeholder.com/100'} width={50}/>
                        {text}
                    </div>
                );
            }
        },
        {
            title: 'Age',
            dataIndex: 'dob',
            key: 'players.dob',
            sorter: true,
            render: (text, row, index) => {
                return(
                    <p>{this.calculateAge(text)}</p>
                );
            }
        },
        {
            title: 'Player Type',
            key: 'playerType',
            render: (text, row, index) => {
                return(
                    <>
                        <p>{row.gameName && capitalize(row.gameName)}</p>
                        <p>Kit: {row.kitSize}</p>
                    </>
                );
            }
        },
        {
            title: 'Jamaat Name',
            dataIndex: 'jamaatName',
            key: 'players.jamaat_name',
            sorter: true,
        },
        {
            title: 'Created At',
            dataIndex: 'creationStamp',
            key: 'users.creation_stamp',
            sorter: true,
            render: (text, row, index) => {
                return (
                    <p>{moment(text).format('DD-MM-YYYY')}</p>
                );
            }
        },
        {
            title: 'Actions',
            dataIndex: 'status',
            key: 'status',          
            render: (text, row, index) => {
                if(text == 'CODE_VERIFICATION_PENDING') {
                    return(
                            <p>Pending</p>
                        );
                }

                if(text == 'UNVERIFIED') {
                    return(
                        <Switch checkedChildren="Un Verified" unCheckedChildren="Verified"   />
                        );
                }

                if(text == 'VERIFIED') {
                    return(
                        <Switch uncheckedChildren="Un Verified" CheckedChildren="Verified"  />
                        );
                }
            }
        },
    ];


     

    selectSearchBy = (e) => {
        console.log(); 
        const opts = this.state.radioOptions;
        
        opts.map(opt=>{
            opt.checked = false;
            if(opt.value == e.target.value) {
                opt.checked = true;     
            }
            return opt;
        });

        this.setState({
            radioOptions: opts
        });
    }
    
    
    setPager = (pager)=> {
        const params = this.state.params; 
        params.offset = pager.current-1;
        params.limit = pager.pageSize;

        this.setState({
            params
        });

        this.fetchPlayers();
    }



    setSorter = (sorter) => {
        if(sorter.columnKey){
            const toSort = [sorter.columnKey, sorter.order == "ascend" ? "asc" : "desc"];
            const filters = this.state.filters;
            this.setState({
                filters: {
                    ...filters,
                    toSort
                }
            });
            this.fetchPlayers();
        } 
    }

    

    setFilters = (filt) => {
        // const toSort = [sorter.columnKey, sorter.order == "ascend" ? "asc" : "desc"];
        // const filters = this.state.filters;
        // this.setState({
        //     filters: {
        //         ...filters,
        //         toSort
        //     }
        // });
        // this.fetchPlayers();
    }


    calculateAge = (birthday) => { // birthday is a date
        let ageDifMs = Date.now() - new Date(birthday).getTime();
        let ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
        
    render() {
        return(
            <>
                <div className="custom-player-list">
                    <h1>Players List</h1>
                    <Table dataSource={this.state.dataSource} loading={this.state.loading} title={()=>{
                        return (<div className="custom-tableTitle">
                            <h3>Total Player(s) {this.state.total}</h3>
                            <h4>Search By.</h4>
                            <div className="radioGroupsContainer m-t-15 m-b-15">
                                <Radio.Group
                                    options={this.state.radioOptions}
                                    optionType="button"
                                    value={this.state.radioOptions.find(val=>val.checked).value}
                                    onChange={this.selectSearchBy}
                                    buttonStyle="solid"
                                />
                            </div>
                            <Input placeholder={'Search By '+this.state.radioOptions.find(val=>val.checked).label} onChange={(e)=>{
                                console.log(e);
                            }}/>
                        </div>)
                    }} loading={false} columns={this.columns} pagination={{ total:this.state.total,  defaultPageSize: this.state.defaultLimit, showSizeChanger: true, pageSizeOptions: [this.state.defaultLimit, '50', '100']}} onChange={(pagination, filters, sorter)=> {
                        console.log({pagination, filters, sorter}) 
                        this.setPager(pagination); 
                        this.setSorter(sorter); 
                        this.setFilters(filters); 
                    }}/>
                </div>
            </>
        );
    }
}


const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ ...userActions }, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withCookies(PlayersList));
