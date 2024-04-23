// import { stringify } from "postcss";

import Swal from "sweetalert2";


const AddCoffee = () => {
    const handleCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const supplierName = form.supplierName.value;
        const quantity = form.quantity.value;
        const Testy = form.Testy.value;
        const category = form.category.value;
        const details = form.details.value;
        const url = form.url.value;

        const newCoffee = {coffeeName, supplierName, quantity, Testy, category, details, url};
        console.log(newCoffee);


        fetch('http://localhost:5000/coffee',
    {
        method: 'POST',

        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(newCoffee)
        
    })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);

            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Coffee has been Added',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })

        
        }
    
    return(
        <div className="bg-[#F4F3F0] p-5">
            <h2 className="text-5xl font-semibold text-[#331A15] mb-3">ADD NEW COFFEE!</h2>
            <p className="text-black mb-10">
            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that it has a more-or-less normal <br /> distribution of letters, as opposed to using Content here.
            </p>
            <form onSubmit={handleCoffee}>
                <div className="flex mb-5 justify-center">
                    <div className="mr-10">
                    <input type="text" placeholder="Coffee name" name="coffeeName" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                    <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex mb-5 justify-center">
                    <div className="mr-10">
                    <input type="text" placeholder="Supplier name" name="supplierName" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                    <input type="text" placeholder="Testy" name="Testy" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex mb-5 justify-center">
                    <div className="mr-10">
                    <input type="text" placeholder="Category" name="category" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                    <input type="text" placeholder="Details" name="details" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
             
                <input type="text" placeholder="Photo URL" name="url" className="input input-bordered w-full max-w-xs" />
                <br />
                <br />
                <br />

                <input type="submit" value="Add Coffee" className="btn btn-accent"/>

            </form>
        </div>
    )
    
}

export default AddCoffee;