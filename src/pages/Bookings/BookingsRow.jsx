import React from 'react';

const BookingsRow = ({ booking }) => {

    const { package_image, customer_name, customer_email, delivery_address, delivery_date, customer_phoneNumber, package_title, package_id, package_price } = booking;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={package_image} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer_name}</div>
                        <div className="text-sm opacity-50">Delivery Address: {delivery_address}</div>
                    </div>
                </div>
            </td>
            <td>
                {delivery_date}
            </td>
            <td>Price: ${package_price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Pending</button>
            </th>
        </tr>
    );
};

export default BookingsRow;