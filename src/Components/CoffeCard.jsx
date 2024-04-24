import Swal from "sweetalert2";

const CoffeCard = ({coffee}) => {
    const {_id ,coffeeName, supplierName, quantity, Testy, category, details, url} = coffee;

    const hanldeDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method : 'DELETE'
                })
                .then(res=> res.json())
                .then(data => {
                    console.log(data);
                   if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                   }
                   else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                      });
                   }
                })

              
            }
          });
    }

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
                        <button
                        onClick={()=> hanldeDelete(_id)}
                         className="btn btn-ghost bg-red-900 mr-5 text-[#FFFFFF]">Delete</button>
                        <button className="btn btn-accent text-[#FFFFFF] ">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;