const CoffeCard = ({coffee}) => {
    const {coffeeName, supplierName, quantity, Testy, category, details, url} = coffee;
    return (
        <div>
            <div className="flex justify-evenly items-center border p-10 rounded-lg bg-slate-400">
                <div>
                    <img src={url} alt="loading..." />
                </div>
                <div>
                    <div>
                    <div>
                    <h3>Name : {coffeeName}</h3>
                    <h3>Supplier : {supplierName}</h3>
                    <h3>Quantity : {quantity}</h3>
                    <h3>Category : {category}</h3>
                    <h3>Test : {Testy}</h3>
                    <p>{details}</p>
                </div>
                    </div>
                    <div className="mt-7">
                        <button className="btn btn-primary mr-5 text-[#FFFFFF]">Update</button>
                        <button className="btn btn-ghost bg-red-900 mr-5 text-[#FFFFFF]">Delete</button>
                        <button className="btn btn-accent text-[#FFFFFF] ">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;