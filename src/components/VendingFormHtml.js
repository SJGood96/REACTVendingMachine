import React from 'react';

const VendingFormHtml = props => {
    return (
        <form action= '#'>
            <div className="form-group">
                <label htmlFor="Total$In">Total $ In:</label>
                <br/>
                <input type="text"
                    name="Total$In"
                    display="0.00"
                    placeholder="0.00"
                    readOnly/>
                <div className="btn-group">
                    <button type="addDollar">Add Dollar</button>
                    <button type="addQuarter">Add Quarter</button>
                    <br/>
                    <button type="addDime">Add Dime</button>
                    <button type="addNickel">Add Nickel</button>
                </div>
            </div>

            <hr/>

            <div className="form-group">
                <label htmlFor="Messages">Messages</label>
                <br/>
                <input type="text"
                    name="Messages"
                    display="Messages"
                    placeholder="Messages"
                    readOnly/>
                <br/>
                <label htmlFor="Item">Item: </label>
                <input type= "text"
                    name="Item"
                    placeholder="ItemId"
                    readOnly/>
                <br/>
                <button type="MakePurchase">Make Purchase</button>
            </div>

            <hr/>

            <div className="form-group">
                <label htmlFor="Change">Change</label>
                <br/>
                <input type= "text"
                    name="Change"
                    placeholder="Change"
                    readOnly/>
                    <br/>
                <button type="Change">Change Return</button>
            </div>
        </form>
    )
}

export default VendingFormHtml;