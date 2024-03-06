import "./UserInfo.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserInfo = () => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInput">Input 1</label>
          <input  className="form-control" id="exampleInput" placeholder="Enter information" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInput">Input 2</label>
          <input  className="form-control" id="exampleInput" placeholder="Enter information" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInput">Input 3</label>
          <input className="form-control" id="exampleInput" placeholder="Enter information" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInput">Input 4</label>
          <input  className="form-control" id="exampleInput" placeholder="Enter information" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  </div>
  );
};

export default UserInfo;
