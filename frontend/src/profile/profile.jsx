import * as React from 'react';

export class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            imageUrl: '',
            profileUrl: ''
        };
    }

    componentDidMount() {
        const profile = JSON.parse(localStorage.getItem('profile'));

        this.setState({
            name: profile.userData.displayName,
            imageUrl: profile.userData.image.url,
            profileUrl: profile.userData.url
        });
    }
    render() {
        return (<div>
            <div className="col-md-4"></div>
        <div className="col-md-4">
        <div className="card" style={{marginTop:"50px"}}>
          <h5 className="card-header text-center bg-dark text-white">Google Profile</h5>
           <div className="dropdown bio">
              <button className="btn bmd-btn-icon dropdown-toggle" type="button" id="bio_1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="material-icons">more_vert</i>
              </button>
              <div className="dropdown-menu dropdown-menu-left" aria-labelledby="bio_1" style={{width: "300px"}} >
                <p className="card-subtitle bio_content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae hic, eum eligendi magni illum? Provident sapiente aperiam.</p>
               </div>
            </div>
          <div className="card-body">
              <div className="image_ava" style={{marginLeft:"150px"}}>
                <img src={this.state.imageUrl} className="img-thumbnail rounded mx-auto d-block" alt="avatar"/>
              </div>
            <h4 className="card-title text-center">{this.state.name}</h4>
            <div className="paneles-usuario">
              <div>
              </div>
              <div className="bloques bgg" style={{cursor: "pointer"}} onClick={() => location.href=this.state.profileUrl}>
              <i className="fa fa-google-plus"></i>
                <span>5,034</span>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div></div>);
    }
}