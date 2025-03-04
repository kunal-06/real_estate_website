
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PropertyTable() {
    const [PropertyList, setPropertyList] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        if(user.role=='Admin'){
            fetch(`https://localhost:7273/Property/Topten`).then((res) => res.json()).then((data) => {
                setPropertyList([...data])
                console.log(data)
            })
        }
        else{
            fetch(`https://localhost:7273/Property/Topten/${user.userID}`).then((res) => res.json()).then((data) => {
                setPropertyList([...data])
                console.log(data)
            })
        }

    }, [])

    const formatPrice = (price) => {
        if (price >= 10000000) {
            return (price / 10000000).toFixed(1).replace(".0", "") + " Cr";
        } else if (price >= 100000) {
            return (price / 100000).toFixed(1).replace(".0", "") + " L";
        } else if (price >= 1000) {
            return (price / 1000).toFixed(1).replace(".0", "") + "K";
        }
        return price.toString();
    };

    return <>
        <div className="card" style={{ fontSize: "13px" }}>
            <h5>Latest Added</h5>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Property Name</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Total Request </th>
                        <th>Total Visit</th>
                        <th>Listing Date</th>
                        <th>Status</th>
                        <th>View</th>
                    </tr>
                </thead>
                {
                    PropertyList.map(e => {
                        return <tr>
                            <td><img src={'https://localhost:7273/' + e.imagePath} width={80} /></td>
                            <td>{e.propertyName}</td>
                            <td>{e.propertyType}</td>
                            <td>{e.category}</td>
                            <td>{formatPrice(e.price)}</td>
                            <td>{e.requestCount}</td>
                            <td>{e.visitCount}</td>
                            <td>{String(e.listing_Date).substring(0, 10)}</td>
                            <td>{e.status}</td>
                            <td><Link to={"/Admin/PropertyDetails/" + e.propertyID} class="text-primary"><i class="fas fa-fw fa-eye"></i></Link></td>
                        </tr>
                    })
                }
            </table>
        </div>
    </>
}