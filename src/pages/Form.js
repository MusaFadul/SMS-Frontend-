import React, { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Category *</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Choose ...</option>
            <option>Flat</option>
            <option>House</option>
            <option>Land</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">Offer Type *</label>
          <select className="form-control" id="exampleFormControlSelect2">
            <option>Choose ...</option>
            <option>Rent</option>
            <option>Sell</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">Condition *</label>
          <select className="form-control" id="exampleFormControlSelect2">
            <option>Choose ...</option>
            <option>Furnished</option>
            <option>Un-furnished</option>
          </select>
        </div>
        <div className="form-group">
          <label for="inputZip">Size (sqm)</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="row">
          <div className="col col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">Available from</label>
              <select className="form-control" id="exampleFormControlSelect2">
                <option>Choose ...</option>
                <option>Furnished</option>
                <option>Un-furnished</option>
              </select>
            </div>
          </div>
          <div className="col col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">To</label>
              <select className="form-control" id="exampleFormControlSelect2">
                <option>Choose ...</option>
                <option>Furnished</option>
                <option>Un-furnished</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default GeneralInformation;
