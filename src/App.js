import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="wrapper">
      <header className="topnavbar-wrapper">
      <NavBar/>
      </header>
      <section className="section-container">
        <div className="col-xl-9">
          <div className="card-columns">
            <div className="card">
              <a href="#">
                <img className="img-fluid" src="assets/img/bg1.jpg" />
              </a>
              <div className="card-body">
                <p className="d-flex">
                  <span>
                    <small className="mr-1">By
                      <a className="ml-1" href="#">Erica Castro</a>
                    </small>
                    <small className="mr-1">May 03, 2015</small>
                  </span>
                  <span className="ml-auto">
                    <small>
                      <strong>56</strong>
                      <span>Comments</span>
                    </small>
                  </span>
                </p>
                <h4>
                  <a href="#">Trip down the river</a>
                </h4>
                <p>Aenean in sollicitudin velit. Nam sem magna, tristique non facilisis a, porta ut elit. Aliquam
                  luctus nulla in justo euismod blandit. Aliquam condimentum enim a risus cursus blandit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="row">
            <div className="col-12">
              <div className="card card-default">
                <div className="card-header">Search</div>
                <div className="card-body">
                  <form className="form-horizontal">
                    <div className="input-group">
                      <input className="form-control" type="text" placeholder="Search for..." />
                      <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button">
                          <em className="fa fa-search"></em>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-4 col-xl-12">
              <div className="card card-default">
                <div className="card-header">Categories</div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li>
                      <a href="">
                        <em className="fa fa-angle-right fa-fw"></em>Smartphones</a>
                    </li>
                    <li>
                      <a href="">
                        <em className="fa fa-angle-right fa-fw"></em>Mobiles</a>
                    </li>
                    <li>
                      <a href="">
                        <em className="fa fa-angle-right fa-fw"></em>Tech</a>
                    </li>
                    <li>
                      <a href="">
                        <em className="fa fa-angle-right fa-fw"></em>Inpiration</a>
                    </li>
                    <li>
                      <a href="">
                        <em className="fa fa-angle-right fa-fw"></em>Workspace</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-4 col-xl-12">
              <div className="card card-default">
                <div className="card-header">Tag Cloud</div>
                <div className="card-body">
                  <div className="mw-100"></div>
                </div>
              </div>
            </div>
            <div className="col-4 col-xl-12">
              <div className="card card-default">
                <div className="card-header">Ads</div>
                <div className="card-body ie-fix-flex">
                  <a href="">
                    <img className="img-fluid img-thumbnail" src="assets/img/mockup.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
}

export default App;
