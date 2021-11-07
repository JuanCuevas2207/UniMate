import { Component } from 'react'
import Residences from '../Components/residences/Residences';
import Filters from '../Components/filters/Filters';
import NavigationBar from '../Components/navigationBar/NavigationBar';
import Spinner from '../Components/spinner/Spinner'
import { connect } from 'react-redux'
import * as actionCreators from '../Store/Actions/residence'

class Home extends Component {

    state = {
        residenceData: [],
    }

    componentDidMount() {
        this.props.onFetchResidence(this.changeState);
    }

    changeState = () => {
        this.setState({
            residenceData: [...this.props.residence]
        })
    }

    renderResidences = () => {
        let content = <Residences residenceList={this.state.residenceData}
        ></Residences>

        if (this.props.loadingRecipes) {
            content = <Spinner></Spinner>
        }

        return content;
    }

    render() {
        return (
            <>
                <NavigationBar />
                <div className={'m-5 row'}>
                    <div className={'col-4'}>
                        <Filters />
                    </div>
                    <div className={'col-1'}></div>
                    <div className={'col-7'}>
                        {this.renderResidences()}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        residence: state.residenceStore.residence,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchResidence: (onSuccessCallback) => {
            dispatch(actionCreators.fetchResidence(onSuccessCallback));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);