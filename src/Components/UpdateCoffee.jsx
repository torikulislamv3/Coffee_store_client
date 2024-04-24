import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffees = useLoaderData()
    const {_id ,coffeeName, supplierName, quantity, Testy, category, details, url} = coffees;
 

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const supplierName = form.supplierName.value;
        const quantity = form.quantity.value;
        const Testy = form.Testy.value;
        const category = form.category.value;
        const details = form.details.value;
        const url = form.url.value;

        const updatedCoffee = {coffeeName, supplierName, quantity, Testy, category, details, url};
        console.log(updatedCoffee);


        fetch(`http://localhost:5000/coffee/${_id}`,
    {
        method: 'PUT',

        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(updatedCoffee)
        
    })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);

            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Coffee has been Updated',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })

        
        }

    return (
        <div className="bg-[#F4F3F0] p-5">
            <h2 className="text-5xl font-semibold text-[#331A15] mb-3">UPDATE YOUR COFFEE!</h2>
            <p className="text-black mb-10">
            Coffee Name : <span className="text-3xl text-yellow-950">{coffeeName}</span>
            </p>
            <form onSubmit={handleUpdateCoffee}>
                <div className="flex mb-5 justify-center">
                    <div className="mr-10">
                    <input type="text" placeholder="Coffee name" name="coffeeName" className="input input-bordered w-full max-w-xs" defaultValue={coffeeName} />
                    </div>
                    <div>
                    <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered w-full max-w-xs" defaultValue={quantity}/>
                    </div>
                </div>
                <div className="flex mb-5 justify-center">
                    <div className="mr-10">
                    <input type="text" placeholder="Supplier name" name="supplierName" className="input input-bordered w-full max-w-xs" defaultValue={supplierName}/>
                    </div>
                    <div>
                    <input type="text" placeholder="Testy" name="Testy" className="input input-bordered w-full max-w-xs" defaultValue={Testy}/>
                    </div>
                </div>
                <div className="flex mb-5 justify-center">
                    <div className="mr-10">
                    <input type="text" placeholder="Category" name="category" className="input input-bordered w-full max-w-xs" defaultValue={category}/>
                    </div>
                    <div>
                    <input type="text" placeholder="Details" name="details" className="input input-bordered w-full max-w-xs" defaultValue={details}/>
                    </div>
                </div>
             
                <input type="text" placeholder="Photo URL" name="url" className="input input-bordered w-full max-w-xs" defaultValue={url}/>
                <br />
                <br />
                <br />

                <input type="submit" value="Update Coffee" className="btn btn-accent"/>

            </form>
        </div>
    );
};

export default UpdateCoffee;